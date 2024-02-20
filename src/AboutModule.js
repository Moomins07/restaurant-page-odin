import './css/style.css';

const AboutModule = (() => {

    // GLOBAL VARIABLES
    const contentDiv = document.getElementById('home-page');


    // RENDER ELEMENTS
    function setAboutContent() {
        const mainDiv = document.createElement('div')
        const h1 = document.createElement('h1')
        mainDiv.id = 'about'
        mainDiv.className = 'flex flex-col md:p-2 text-white opacity-85 rounded lg:w-1/2 lg:justify-around hide'
        mainDiv.style.backgroundColor = '#212934'
        mainDiv.appendChild(h1)
        h1.className = 'mb-6 font-alata text-center text-white text-xl md:text-5xl md:mt-0'
        h1.textContent = "About Us!"
        contentDiv.firstChild.nextElementSibling.appendChild(mainDiv)
        mainDiv.appendChild(document.createElement('div')).innerHTML = "<p class='text-sm'>Welcome to the mystical origins of Ireine's Emporium of Wonders, a sanctuary for the magical, the mysterious, and the outright extraordinary. Born from a spark of magic under the gleaming Moon of Eldoria, our emporium is not just a shop but a gateway to realms untold and adventures unimagined.<br><br>Long ago, in the forgotten valleys of Mirath, Ireine, a wanderer with a heart full of curiosity and eyes alight with wonder, stumbled upon an ancient artifact.This was no ordinary relic; it was the Compass of Destiny, said to point not to the north, but to one's fate. As the compass needle twirled and danced under the starlit sky, it guided Ireine to a hidden glen, where the air buzzed with enchantment, and the ground shimmered with latent magic.<br><br>It was there, amidst the whispering trees and the ethereal glow of faerie lights, that Ireine decided to establish a shop like no other.A place where magic wasn't just contained in dusty tomes or locked away in ancient chests but lived, breathed, and was shared freely.<br><br>Ireine's Emporium of Wonders quickly became a crossroads for adventurers, mystics, and dreamers. Each item on its shelves and in its corners was collected with care, infused with stories of courage, friendship, and the endless pursuit of knowledge.<br><br>From the Time - Twisting Teapot, found in the ruins of a clock tower frozen in time, to the Invisibility Cloak, woven from the silk of moonlight by the Night Weavers of Loria, every piece in the emporium invites you to embark on a journey beyond the bounds of imagination.< br > <br>But Ireine's vision went beyond merely selling relics and artifacts. The emporium serves as a beacon for those seeking not just the wonders of the world but also the wonders within themselves. It's a place where magic is real, dreams are tangible, and every visit leaves you a little changed, forever enchanted.<br><br>So, step into Ireine's Emporium of Wonders, where the past, present, and future intertwine, and discover the magic that awaits in every corner. Here, every item tells a story, and every story opens a door to new worlds, waiting just for you.<br><br>Welcome, traveler, to your next great adventure.</p><hr><p class='text-sm'>At Ireine's Emporium of Wonders, we believe that every visit should be an experience, a moment captured in the web of time, forever memorable. Join us, and let's explore the endless possibilities that await within the walls of our magical haven.</p>"
    }










    return {
        setAboutContent,
    }

})();

export { AboutModule }

