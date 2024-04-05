import Head from "next/head"



export const Metadata = ({
    title = 'Bloks.Social',
    description = 'Organise your bookmarks, favorite tutorials, articles in one place.',
    image

}) => {

    const metadata = {
        title: title,
        description: description,
        category: 'Bookmarking Tool',
        icons: ['/favicon.ico'],
        openGraph: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Bloks.Social',
            title: title,
            description: description,
            url: 'https://www.bloks.social/',
        },
        viewport: 'width=device-width, initial-scale=1',
    };

    if (image) {
        metadata.twitter = {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [image], // Wrap the image in an array
            // creator: '@bloks',
            // creatorId: '@bloks',
        };
    }

    return metadata;
}


export const MetaHead = ({
    title = 'Bloks.Social',
    description = 'Organise your bookmarks, favorite tutorials, articles in one place.',
    image
}) => {

    return (
        <head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.ico" />

            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="category" content="Bookmarking Tool" />


            {/* open-graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.bloks.social/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="en_US" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />


            {/* twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* <meta name="twitter:site" content="@site" />
            <meta name="twitter:creator" content="@creator" /> */}

            {image && (
                <meta name="twitter:image" content={image} />
            )}
        </head>
    )
}

export default Metadata