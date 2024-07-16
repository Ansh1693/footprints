import {
  create as createDocument,
  read as readDocument,
  del as deleteDocument,
  update as updateDocument,
} from "../../functions/crud/document.function.js";
import { checkAccess } from "../../functions/utility/check.function.js";

/**
 * A controller to handle the request to create a new document
 *
 */
export const create = async (req, res) => {
  try {
    const { documentObject, blokObject } = req.body;

    if (!documentObject.profileId) {
      documentObject.profileId = req.user.profileId;
    }

    if (req.user.profileId !== documentObject.profileId) {
      throw new Error("Profile Id don't match.");
    }

    const data = await createDocument(documentObject, blokObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to read a document(s)
 */
export const read = async (req, res) => {
  try {
    const { userId } = req.user;
    const { documentId } = req.query;

    const documentObject = {};
    if (documentId) {
      documentObject.id = documentId;
    } else if (userId) {
      documentObject.userId = userId;
    }

    const data = await readDocument(documentObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to update a document
 *
 */
export const update = async (req, res) => {
  try {
    const { documentObject } = req.body;
    const { profileId } = req.user;

    if (documentObject?.profileId && profileId !== documentObject.profileId) {
      throw new Error("Profile Id don't match.");
    }

    await checkAccess(profileId, "document", documentObject.id);

    const data = await updateDocument(documentObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the request to delete a document
 */
export const del = async (req, res) => {
  try {
    const { documentObject } = req.body;
    const { profileId } = req.user;

    console.log(req.body);

    if (documentObject?.profileId && profileId !== documentObject.profileId) {
      throw new Error("Profile Id don't match.");
    }

    await checkAccess(profileId, "document", documentObject.id);

    const data = await deleteDocument(documentObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};
