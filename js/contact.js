import loadHome from "./home";
import loadMenu from "./menu";

function loadContact() {
    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.textContent = 'Contact us!';

    const name = document.createElement('p');
    name.textContent = 'John Doe';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123-456-7890';

    const location = document.createElement('p');
    location.textContent = '123 Main Street, City, State';

    contact.appendChild(name);
    contact.appendChild(phoneNumber);
    contact.appendChild(location);

    content.appendChild(contact);

    // Create home button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', function() {
        content.innerHTML = '';
        loadHome();
    });
    content.appendChild(homeButton);

    //Create menu button
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', function() {
        content.innerHTML = '';
        loadMenu();
    });
    content.appendChild(menuButton);
}

export default loadContact;