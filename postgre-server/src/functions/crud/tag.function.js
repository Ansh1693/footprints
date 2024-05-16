import {
  Tag,
  TagsDocument,
} from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will create a new tag
 *
 */
export const create = async (tagObject, documentObject) => {
  try {
    const createdTag = await Tag.create({
      data: {
        ...tagObject,
        TagsDocument: {
          create: [
            {
              Document: {
                connect: {
                  id: documentObject.id,
                },
              },
            },
          ],
        },
      },
    });
    return createdTag;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will read a tag(s)
 *
 */
export const read = async (tagObject) => {
  try {
    return await Tag.findUnique({
      where: {
        ...tagObject,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will update a tag
 *
 */
export const update = async (tagObject) => {
  try {
    return await Tag.update({
      where: {
        ...tagObject,
      },
      data: {
        ...tagObject,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a tag
 *
 * @param {import("../../../types/schema/tag.schema").tagDocument} tagObject
 */
export const del = async (tagObject) => {
  try {
    return await Tag.delete({
      where: {
        ...tagObject,
      },
    });
  } catch (error) {
    throw error;
  }
};
