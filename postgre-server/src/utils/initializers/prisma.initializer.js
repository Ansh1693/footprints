import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

export const User = prisma.user;
export const UserMetadata = prisma.userMetadata;
export const UserAuth = prisma.userAuth;
export const GoogleAuth = prisma.googleAuth;
export const RedditAuth = prisma.redditAuth;
export const Document = prisma.document;
export const DocumentMetadata = prisma.documentMetadata;
export const Tag = prisma.tag;
export const TagsDocument = prisma.tagsDocument;
export const RedditData = prisma.redditData;
export const PinterestData = prisma.pinterestData;
export const Comments = prisma.comments;
export const Blok = prisma.blok;
export const BloksDocument = prisma.bloksDocument;
export const BlokMetadata = prisma.blokMetadata;
export const BlokFollowers = prisma.blokFollowers;
