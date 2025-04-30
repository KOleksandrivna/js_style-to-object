'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';') // Розбиваємо рядок по ";"
    .filter((style) => style.trim()) // Видаляємо пусті елементи
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map((str) => str.trim());

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
