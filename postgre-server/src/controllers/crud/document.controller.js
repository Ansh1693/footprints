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

    if (!documentObject.userId) {
      documentObject.userId = req.user.userId;
    }

    if (req.user.userId !== documentObject.userId) {
      throw new Error("User Id don't match.");
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
    const { userId } = req.user;

    if (documentObject?.userId && userId !== documentObject.userId) {
      throw new Error("Profile Id don't match.");
    }

    await checkAccess(userId, "document", documentObject.id);

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
    const { userId } = req.user;

    if (documentObject?.userId && userId !== documentObject.userId) {
      throw new Error("Profile Id don't match.");
    }

    await checkAccess(userId, "document", documentObject.id);

    const data = await deleteDocument(documentObject);

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};
