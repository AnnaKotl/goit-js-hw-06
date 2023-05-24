const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const makeIngredientsItems = elements => {
  return elements.map(element => {
    const itemElements = document.createElement('li');
    itemElements.textContent = element;
    itemElements.classList.add('item');
    return itemElements;
  });
};

const itemIngrediens = makeIngredientsItems(ingredients);
listOfIngredients.append(...itemIngrediens);
