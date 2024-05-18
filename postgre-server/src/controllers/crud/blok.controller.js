import {
  create as createBlok,
  del as deleteBlok,
  read as readBlok,
  update as updateBlok,
} from "../../functions/crud/blok.function.js";
import { checkAccess } from "../../functions/utility/check.function.js";

/**
 * A controller to handle the request to create a new blok
 *
 */
export const create = async (req, res) => {
  try {
    const { blokObject } = req.body;

    const data = await createBlok(blokObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to read a blok(s)
 *
 */
export const read = async (req, res) => {
  try {
    const { profileId, userId } = req.user;
    const { blokId } = req.query;

    let blokObject = {};

    if (blokId) {
      blokObject.id = blokId;
    } else {
      blokObject.userId = userId;
    }

    const data = await readBlok(blokObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to update a blok
 *
 */
export const update = async (req, res) => {
  try {
    const { blokObject } = req.body;
    const { profileId } = req.user;

    await checkAccess(profileId, "blok", blokObject.id);

    const data = await updateBlok(blokObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to delete a blok
 *
 */
export const del = async (req, res) => {
  try {
    const { blokObject } = req.body;
    const { profileId } = req.user;

    await checkAccess(profileId, "blok", blokObject.id);

    const data = await deleteBlok(blokObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};
