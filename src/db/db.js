import Dexie from 'dexie';

export const db = new Dexie('LogHeap');

db.version(2).stores({
  insights: '++id, title, content, tagsId',
  tags: "++id, label"
});

db.version(1).stores({
  insights: '++id, title, content'
});
