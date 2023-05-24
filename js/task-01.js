const listOfCategories = document.querySelector('#categories')
const itemsOfCategories = listOfCategories.querySelectorAll('.item');

console.log(`Number of categories: ${itemsOfCategories.length}`);


itemsOfCategories.forEach((item) => {
    const title = item.querySelector('h2');
    const point = item.querySelectorAll('li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${point.length}`);
});