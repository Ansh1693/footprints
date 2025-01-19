import {
  Document,
  User,
  DocumentMetadata,
} from "../../utils/initializers/prisma.initializer.js";

import { read, create } from "../crud/document.function.js";

import redditClient from "../../utils/clients/reddit.client.js";

// export const findAuthorizedPlatforms = async (id) => {
//   try {
//     const check = await User.exists({
//       profile_id: profile_id,
//     });

//     if (!check) throw new Error("Invalid Token");
//     const user = await User.findOne({ profile_id: profile_id })
//       .select([
//         // 'twitter_auth_tokens',
//         "pinterest_auth_tokens",
//         "reddit_auth_tokens",
//         "tumblr_auth_tokens",
//         "pocket_auth_tokens",
//       ])
//       .lean()
//       .exec();

//     let platforms = {};

//     if (user.twitter_auth_tokens) platforms = { ...platforms, twitter: true };
//     if (user.reddit_auth_tokens) platforms = { ...platforms, reddit: true };
//     if (user.pinterest_auth_tokens)
//       platforms = { ...platforms, pinterest: true };
//     if (user.tumblr_auth_tokens) platforms = { ...platforms, tumblr: true };
//     if (user.pocket_auth_tokens) platforms = { ...platforms, pocket: true };

//     return platforms;
//   } catch (error) {
//     // logtail.error(error)

//     throw error;
//   }
// };

export const Reddit = async ({ userId }) => {
  try {
    const redditUserClient = await redditClient({ id: userId });

    const redditBookmarks = JSON.parse(
      JSON.stringify(await redditUserClient.getMe().getSavedContent()),
    );

    const getUserBookmarks = await read({
      userId: userId,
      DocumentMetadata: {
        documentType: "Reddit",
      },
    });

    const userRedditMap = new Map();

    getUserBookmarks.forEach((bookmark) => {
      userRedditMap.set(bookmark?.RedditData?.postId, bookmark);
    });

    let newBookmarks = [];

    //Bookmark -> title: post.title, body => post.selfText or selftext_html
    //Metadata type = rreddit url => post.url bodyTmageUrl=>
    //reddit data username=> post.author postId=>post.id
    //video  post.is_video = true? post.media.reddit_video.fallback_url : post.preview.images array se har element ka say it it.source.url

    for await (const post of redditBookmarks) {
      if (!userRedditMap.has(post?.id)) {
        // console.log(redditBookmarks);
        const previewImages =
          post?.preview?.images?.map((image) => image.source.url) || [];
        console.log(Object.keys(post?.media_metadata));
        const mediaImages =
          Object.keys(post?.media_metadata || {}).map(
            (key) => post?.media_metadata[key]?.s?.u,
          ) || [];
        const documentObject = {
          userId,
          heading: post.title ? post.title : "",
          body: post.selftext_html ? post.selftext_html : "",
          DocumentMetadata: {
            documentType: "Reddit",
            url: {
              source: post?.url,
              images: [...previewImages, ...mediaImages],
              video: post?.media?.reddit_video?.fallback_url,
            },
          },
          RedditData: {
            username: post?.author,
            postId: post?.id,
          },
        };
        const createdBookmark = await create(documentObject, {});

        newBookmarks.push(createdBookmark);
      }
    }

    return { newBookmarks, redditBookmarks };
  } catch (err) {
    throw err;
  }
};
// export const Pinterest = async () => {
//   try {
//     const pinterestUserClient = await pinterestClient(profile_id);

//     const userPinterestBookmarks = await findBookmarks(
//       profile_id,
//       "pinterest",
//     ).then((bookmarks) =>
//       bookmarks.map((bookmark) => bookmark.pinterest_post_id),
//     );

//     /**
//      * @type {import('../../utils/schemas/mongo/Bookmark').BookmarkDocument[]}
//      */
//     let newBookmarks = [];

//     const pinterestBoards = await axios.get(
//       "https://api.pinterest.com/v5/boards?page_size=250",
//       {
//         headers: pinterestUserClient,
//       },
//     );

//     for await (const board of pinterestBoards.data.items) {
//       const pins = await axios.get(
//         `https://api.pinterest.com/v5/boards/${board.id}/pins?page_size=250`,
//         {
//           headers: pinterestUserClient,
//         },
//       );

//       for await (const pin of pins.data.items) {
//         if (
//           userPinterestBookmarks.some((bookmark_id) => bookmark_id === pin.id)
//         )
//           continue;

//         const createdBookmark = await createBookmark({
//           profile_id: profile_id,
//           pinterest_post_id: pin.id,
//           article_link: pin?.link,
//           post_heading: pin?.title || pin?.description || "untitled",
//           post_data: `${pin?.description}\n![${pin?.description}](${pin?.media?.images?.originals?.url})`,
//           bookmark_source: "pinterest",
//         });

//         newBookmarks.push(createdBookmark);

//         // mixpanelUsers.people.increment(profile_id, 'pinterestBookmarks')
//       }
//     }

//     // eventAnalytics('user', profile_id, 'importBookmarks', {
//     // 	bookmarksImported: newBookmarks.length,
//     // 	importSource: 'pinterest',
//     // })

//     return newBookmarks;
//   } catch (err) {
//     throw err;
//   }
// };
