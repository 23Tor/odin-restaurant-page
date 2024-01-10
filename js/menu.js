// menu.js
import loadHome from './home.js';
import loadContact from './contact.js';

function loadMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.textContent = 'Here is our menu!';

    // Create menu items
    const menuItem1 = document.createElement('div');
    menuItem1.textContent = 'Burger';
    menu.appendChild(menuItem1);

    const menuItem2 = document.createElement('div');
    menuItem2.textContent = 'Pizza';
    menu.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.textContent = 'Salad';
    menu.appendChild(menuItem3);

    content.appendChild(menu);

    // Create home button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', function() {
        content.innerHTML = '';
        loadHome();
    });
    content.appendChild(homeButton);

    // Create contact button
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', function() {
        content.innerHTML = '';
        loadContact();
    });
    content.appendChild(contactButton);
}

export default loadMenu;