import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('recipeBook.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS recipeBook (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          ingredients TEXT NOT NULL,
          image TEXT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertRecipeBook = (
  title,
  ingredients,
  image
 
) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO recipeBook (title, ingredients, image) VALUES (?, ?, ?)',
        [title, ingredients, image ],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchRecipeBook = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM recipeBook',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}