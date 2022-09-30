"use-strict";
Object.defineProperty(exports, "__esModule", { value: true });

const core = require("@actions/core");
const glob = require("@actions/glob");
const fs = require("fs/promises");

const find = core.getInput("find");
const replace = core.getInput("replace");
const files = core.getInput("files") || "**";
const regex = core.getInput("regex") || true;
const replaceFirst = core.getInput("replaceFirst") || false;

if (find == null) {
  console.log("ERROR: No value for input parameter 'find'");
  core.setFailed("No value for input parameter 'find'. Unable to run action");
}

if (replace == null) {
  console.log("ERROR: No value for input parameter 'replace'");
  core.setFailed(
    "No value for input parameter 'replace'. Unable to run action"
  );
}

findAndReplace();

async function findAndReplace() {
  const globber = await glob.create(files, {
    matchDirectories: false,
  });

  const findStr = find.toString();
  const replaceStr = replace.toString();

  for await (const file of globber.globGenerator()) {
    try {
      const data = await fs.readFile(file);

      var newData = "";
      if (regex) {
        if (replaceFirst) {
          newData = String(data).replace(new RegExp(find, "g"), replaceStr);
        } else {
          newData = String(data).replaceAll(new RegExp(find, "g"), replaceStr);
        }
      } else {
        if (replaceFirst) {
          newData = String(data).replace(findStr, replaceStr);
        } else {
          newData = String(data).replaceAll(findStr, replaceStr);
        }
      }

      if (newData !== String(data)) {
        await fs.writeFile(file, newData);
        console.log("Replaced in file " + file);
      }
    } catch (err) {
      console.log(err);
      core.setFailed("ERROR while replacing in file " + file);
    }
  }
}
