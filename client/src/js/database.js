import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  const jdb = await openDB('jate', 1);
  const tx = jdb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({ id: 1, value: content });
  const res = await req;
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  const jdb = await openDB('jate', 1);
  const tx = jdb.transaction('jate','readonly');
  const store = tx.objectStore('jate');
  const req = store.getAll();
  const res = await req;
  return res
}


initdb();
