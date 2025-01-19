import { PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

import S3 from "../../utils/api/cloudflare.js";

/**
 * A function that will upload an image to Cloudflare
 *
 */
export const uploadImage = async (file, profileId) => {
  try {
    if (
      !["image/heic", "image/jpeg", "image/png", "image/jpg"].some(
        (type) => type === file.mimetype
      )
    ) {
      throw new Error("Unsupported file type.");
    }

    const fileKey = `${profileId}_${Date.now()}_${file.filename.replace(
      /\s/g,
      "_"
    )}`;

    const h2 = await S3.send(
      new PutObjectCommand({
        Bucket: process.env.CLOUDFLARE_BUCKET,
        Key: fileKey,
        ContentType: file.mimetype,
        Body: await sharp(await file.toBuffer())
          .toFormat("webp")
          .webp({ lossless: true })
          .toBuffer(),
        Metadata: {
          fileType: file.mimetype,
          profile_id: profileId,
          fileName: file.filename,
        },
      })
    );

    console.log(h2);

    return {
      url: `${process.env.CLOUDFLARE_CDN}/${fileKey}`,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will upload the audio to Cloudflare
 *
 */
export const uploadAudio = async (file, profileId) => {
  try {
    if (file.mimetype !== "audio/mpeg") {
      throw new Error("Unsupported audio file type.");
    }

    const fileKey = `${profileId}__${Date.now()}_${file.filename.replace(
      /\s/g,
      "_"
    )}`;

    const h2 = await S3.send(
      new PutObjectCommand({
        Bucket: process.env.CLOUDFLARE_BUCKET,
        Key: fileKey,
        ContentType: file.mimetype,
        Body: await file.toBuffer(),
        Metadata: {
          fileType: file.mimetype,
          profile_id: profileId,
          fileName: file.filename,
        },
      })
    );

    console.log(h2);

    return {
      url: `${process.env.CLOUDFLARE_CDN}/${fileKey}`,
    };
  } catch (error) {
    throw error;
  }
};
