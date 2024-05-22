const fs = require("fs");
const { promisify } = require("util");
const p = require("path");
const readdir = promisify(fs.readdir);

async function getFiles(path) {
  try {
    const entries = await readdir(path, { withFileTypes: true });

    const files = entries
      .filter((file) => !file.isDirectory())
      .map((file) => ({
        path: `${path}/${file.name}`,
        ext: p.extname(`${path}/${file.name}`),
        pathDir: path,
      }));

    const folders = entries.filter((folder) => folder.isDirectory());

    for (const folder of folders) {
      files.push(...(await getFiles(`${path}/${folder.name}`)));
    }
    return files;
  } catch (error) {
    return error;
  }
}
