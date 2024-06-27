import {
  Reddit as importReddit,
  // Pinterest as importPinterest,
} from "../../functions/imports/document.function.js";
// import { checkAccess } from "../../functions/utility/check.function.js";

/*
A controller  to import bookmarks from platforms associated
*/

export const importDocument = async (req, res) => {
  try {
    const platform = req.params.platform;
    let data;

    if (platform === "reddit") {
      data = await importReddit(req.user);
    }

    if (data) {
      res.status(200).send(data);
    }
  } catch (err) {}
};
