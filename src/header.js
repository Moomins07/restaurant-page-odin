import './css/style.css';
import HomeBg from './assets/home-pg.png'

// ELEMENTS

const contentPg = document.getElementById('content')

// ELEMENT CLASSES

const btnClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';


function setNavBar() {
    const header = document.getElementById('header')
    const navBar = document.createElement('nav')

    if (header) {
        navBar.id = 'navbar'
        navBar.className = 'flex justify-center space-x-4'
        header.appendChild(navBar)
        navBar.appendChild(createButtons('pls work', 3, 'navbar'))
    }
}


function setHomeBackground() {
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.style.backgroundImage = `url('${HomeBg}')`;
        contentDiv.style.backgroundSize = 'cover';
        contentDiv.style.backgroundPosition = 'center';
        contentDiv.style.backgroundRepeat = 'no-repeat';
    }
}



function createButtons(text, num, parentId) {
    const parent = document.getElementById(parentId);
    const buttons = []; // Array to hold created buttons

    for (let i = 0; i < num; i++) {
        const button = document.createElement('button');
        button.className = btnClasses;
        button.innerText = text + ' ' + (i + 1); // Optional: add a number to each button text

        parent.appendChild(button); // Append the button to the parent element
        buttons.push(button); // Add button to the array
    }

    return buttons; // Return the array of buttons
}



export { createButtons, setHomeBackground, setNavBar }
