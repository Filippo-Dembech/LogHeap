import Dexie from 'dexie';

export const db = new Dexie('LogHeap');

db.version(1).stores({
  insights: '++id, title, content'
});
