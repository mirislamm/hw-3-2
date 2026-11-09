const menu = [
    { name: 'Борщ', price: 90, type: 'суп' },
    { name: 'Пюре с котлетой', price: 150, type: 'горячее' },
    { name: 'Салат', price: 70, type: 'закуска' },
    { name: 'Компот', price: 40, type: 'напиток' },
    { name: 'Пицца', price: 200, type: 'горячее' }
];

const menuDiv = document.getElementById('menu');
const totalP = document.getElementById('total');
const drinksDiv = document.getElementById('drinks');

const sortedMenu = [...menu].sort((a, b) => a.price - b.price);
for (let i = 0; i < sortedMenu.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    if (sortedMenu[i].price > 100) {
        card.classList.add('expensive');
    }
    if (sortedMenu[i].price < 60) {
        card.classList.add('cheap');
    }

    const title = document.createElement('h3');
    title.textContent = sortedMenu[i].name;

    const price = document.createElement('p');
    price.textContent = `Цена: ${sortedMenu[i].price} руб.`;

    const type = document.createElement('p');
    type.textContent = `Тип: ${sortedMenu[i].type}`;

    card.append(title, price, type);
    menuDiv.append(card);
}

const totalSum = menu.reduce((sum, item) => sum + item.price, 0);
totalP.textContent = `Всего блюд: ${menu.length}, общая стоимость: ${totalSum} руб.`;

const allCards = menuDiv.querySelectorAll('.card');
for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].textContent.includes('напиток')) {
        allCards[i].remove();
    }
}
const mostExpensive = menuDiv.lastElementChild;
const clonedCard = mostExpensive.cloneNode(true);
menuDiv.append(clonedCard);

const dayDish = document.createElement('div');
dayDish.className = 'card expensive';

const dayTitle = document.createElement('h3');
dayTitle.textContent = 'Блюдо дня: Пельмени';

const dayPrice = document.createElement('p');
dayPrice.textContent = 'Цена: 120 руб.';

const dayType = document.createElement('p');
dayType.textContent = 'Тип: горячее';

dayDish.append(dayTitle, dayPrice, dayType);
menuDiv.prepend(dayDish);

const drinks = menu.filter(item => item.type === 'напиток');
for (let i = 0; i < drinks.length; i++) {
    const drinkCard = document.createElement('div');
    drinkCard.className = 'card cheap';

    const drinkTitle = document.createElement('h3');
    drinkTitle.textContent = drinks[i].name;

    const drinkPrice = document.createElement('p');
    drinkPrice.textContent = `Цена: ${drinks[i].price} руб.`;

    const drinkType = document.createElement('p');
    drinkType.textContent = `Тип: ${drinks[i].type}`;

    drinkCard.append(drinkTitle, drinkPrice, drinkType);
    drinksDiv.append(drinkCard);
}
