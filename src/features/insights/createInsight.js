import { db } from "../../db/db";

function lowercase(arr) {
    return arr.map((item) => item.trim().toLowerCase())
}

export async function createInsight({ title, content, tags }) {

    return db.transaction("rw", db.tags, db.insights, async () => {
        const tagsId = [];

        for (const label of lowercase(tags.map(tag => tag.label))) {
            let existingTag = await db.tags
                .where("label")
                .equals(label)
                .first();
            if (!existingTag) {
                const tagId = await db.tags.add({ label });
                tagsId.push(tagId);
            } else {
                tagsId.push(existingTag.id);
            }
        }

        const insight = {
            title,
            content,
            tagsId,
        };

        const insightId = await db.insights.add(insight);
        return insightId;
    });
}
