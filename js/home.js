// home.js
import loadMenu from "./menu";
import loadContact from "./contact";

function loadHome(loadMenuPage, loadContactPage) {
    const content = document.getElementById('content');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Our Restaurant!';
    content.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'We serve the best food in town. Come and taste the difference.';
    content.appendChild(description);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        loadMenu();
        // Hide other pages
        const contactPage = document.getElementById('contact-page');
        if (contactPage) {
            contactPage.style.display = 'none';
        }
    });
    content.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => {
        content.innerHTML = '';
        loadContact();
        // Hide other pages
        const menuPage = document.getElementById('menu-page');
        if (menuPage) {
            menuPage.style.display = 'none';
        }
    });
    content.appendChild(contactButton);
}

export default loadHome;