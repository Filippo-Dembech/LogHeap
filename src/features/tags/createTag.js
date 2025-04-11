import { db } from "../../db/db";

export async function createTag(label) {
    db.tags.add({ label })
}