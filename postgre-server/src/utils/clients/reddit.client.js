import redditAuth from "../api/reddit.js";

import { User, RedditAuth } from "../initializers/prisma.initializer.js";

const updateReddit = async ({ authTokens, id = undefined }) => {
  try {
    if (!id) return;

    await RedditAuth.update({
      where: { id },
      data: {
        accessToken: authTokens.accessToken,
        refreshToken: authTokens.refreshToken,
      },
    });
  } catch (err) {
    throw err;
  }
};

const findToken = async ({ id = undefined }) => {
  try {
    if (!id) return;

    const user = await User.findUnique({
      where: {
        id,
      },
      select: {
        UserAuth: {
          select: {
            RedditAuth: true,
          },
        },
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
};

const redditClient = async ({ id }) => {
  try {
    let auth = await findToken({
      id,
    });

    let redditAuthTokens = auth.UserAuth.RedditAuth;
    const redditUserClient = redditAuth(redditAuthTokens.refreshToken);
    console.log(redditUserClient);
    redditAuthTokens = {
      accessToken: redditUserClient.accessToken,
      refreshToken: redditUserClient.refreshToken,
    };

    // console.log(reddit_auth_tokens);

    updateReddit(redditAuthTokens, auth.UserAuth.RedditAuth.id);

    return redditUserClient;
  } catch (error) {
    throw error;
  }
};

export default redditClient;
