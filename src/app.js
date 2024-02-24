import './css/style.css'
import HomeBg from './assets/home-pg.png'
import Ireine1 from './assets/ireine1.png'
import Ireine2 from './assets/ireine2.png'
import Ireine3 from './assets/ireine3.png'


const images = [Ireine1, Ireine2, Ireine3]; // images map


import { HomeModule } from './HomeModule';
import { MenuModule } from './MenuModule';
import { AboutModule } from './AboutModule';


(() => {

    const contentDiv = document.getElementById('home-page');


    function setHomeBackground() {
        if (contentDiv) {
            contentDiv.style.backgroundImage = `url('${HomeBg}')`;
            contentDiv.style.backgroundSize = 'cover';
            contentDiv.style.backgroundPosition = 'center';
            contentDiv.style.backgroundRepeat = 'no-repeat';
        }
    }


    // CREATE NAVBAR
    function createNavButtons(num, text = 'btn') {
        const buttons = []; // Array to hold created buttons

        for (let i = 0; i < num; i++) {
            const button = document.createElement('button');
            button.className = 'btn-primary md:p-3 md:px-10';

            button.innerText = text + ' ' + (i + 1); // Optional: add a number to each button text
            button.setAttribute(`data-set`, i)

            buttons.push(button); // Add button to the array
        }

        return buttons; // Return the array of buttons
    }

    // RENDER NAVBAR

    function setNavBar() {
        const header = document.getElementById('header')
        const navBar = document.createElement('nav')

        if (header) {
            navBar.id = 'navbar'
            navBar.className = 'flex justify-around md:justify-center space-x-4'
            header.appendChild(navBar)
            const buttons = createNavButtons(3)
            for (let [index, btn] of buttons.entries()) {
                const div = document.createElement('div')
                const img = document.createElement('img')
                div.className = `button-with-image${index + 1} flex flex-col-reverse justify-start items-center`
                img.className = 'image-above opacity-85'
                img.src = images[index];


                img.onload = () => {
                    console.log('Image loaded successfully');
                    // Do something with the image
                    div.appendChild(img)
                };


                div.appendChild(btn)
                navBar.appendChild(div)

                if (index === 0) {
                    btn.textContent = 'Home'
                } else if (index === 1) {
                    btn.textContent = 'Menu'
                } else if (index === 2) {
                    btn.textContent = 'About'
                } else btn.textContent
            }


        }
    }

    // HANDLE INTERACTIONS
    function handleNavBtnClick(e) {
        const btnAtt = e.target.getAttribute('data-set');
        const sections = {
            '0': 'home',
            '1': 'menu',
            '2': 'about'
        };

        // Helper function to toggle visibility
        function toggleVisibility(showId) {
            Object.values(sections).forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (sectionId === showId) {
                    section.classList.remove('hide');
                } else {
                    section.classList.add('hide');
                }
            });
        }

        switch (btnAtt) {
            case '0':
                toggleVisibility('home');
                break;
            case '1':
                toggleVisibility('menu');
                break;
            case '2':
                toggleVisibility('about');
                break;
            // No default needed if all cases are covered
        }


    }

    // EVENT LISTENERS HERE
    function setEventListeners() {
        const navbar = document.getElementById('navbar')
        navbar.addEventListener('click', handleNavBtnClick)
    }


    function init() {
        setHomeBackground();
        setNavBar();
        HomeModule.setHomeContent();
        MenuModule.setMenuContent()
        AboutModule.setAboutContent()
        setEventListeners();
    }




    document.addEventListener('DOMContentLoaded', init)
})();

