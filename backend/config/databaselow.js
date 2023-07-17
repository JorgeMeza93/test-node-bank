import {Low } from "lowdb";
import { JSONFile } from 'lowdb/node'
import {join, dirname} from "path";
import { fileURLToPath } from "url";

let db;
const _dirname = dirname(fileURLToPath(import.meta.url));

async function createConnection(){
    const file = join(_dirname, "./db.json");
    const adapter = new JSONFile(file);
    const defaultData = { posts: [] }
    db = new Low(adapter, defaultData);
    await db.read()
    await db.write();
}

const getConnection = () => {
   return db;
}

export { createConnection, getConnection }