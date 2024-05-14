import {
  create as createTag,
  read as readTag,
  update as updateTag,
  del as deleteTag,
} from "../../functions/crud/tag.function.js";
import { checkAccess } from "../../functions/utility/check.function.js";

/**
 * A controller to handle the request to create a new tag
 *
 */
export const create = async (req, res) => {
  try {
    const { tagObject, documentObject } = req.body;

    const data = await createTag(tagObject, documentObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to read a tag(s)
 */
export const read = async (req, res) => {
  try {
    const { tagObject } = req.body;
    const { profileId } = req.user;

    const data = await readTag(tagObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to update a tag
 *
 */
export const update = async (req, res) => {
  try {
    const { tagObject } = req.body;
    const { profileId } = req.user;

    await checkAccess(profileId, "tag", tagObject.id);

    const data = await updateTag(tagObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to delete a tag
 *
 */
export const del = async (req, res) => {
  try {
    const { tagObject } = req.body;
    const { profileId } = req.user;

    await checkAccess(profileId, "tag", tagObject.id);

    const data = await deleteTag(tagObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};
