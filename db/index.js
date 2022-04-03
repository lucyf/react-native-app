import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('challengeAlbum.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS challengeAlbum (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          image TEXT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertChanllengeAlbum = (
  title,
  description,
  image
 
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO challengeAlbum (title, description, image) VALUES (?, ?, ?)',
        [title, description, image ],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchChanllengeAlbum = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM challengeAlbum',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}