import './css/style.css';

const MenuModule = (() => {

    // GLOBAL VARIABLES
    const contentDiv = document.getElementById('home-page');


    // RENDER ELEMENTS
    function setMenuContent() {
        const mainDiv = document.createElement('div')
        const h1 = document.createElement('h1')
        mainDiv.id = 'menu'
        mainDiv.className = 'flex flex-col md:p-2 text-white opacity-85 rounded lg:w-1/2 lg:justify-around hide'
        mainDiv.style.backgroundColor = '#212934'
        mainDiv.appendChild(h1)
        h1.className = 'mb-6 font-alata text-center text-white text-xl md:text-5xl md:mt-0'
        h1.textContent = "Our Menu!"
        contentDiv.firstChild.nextElementSibling.appendChild(mainDiv)
        mainDiv.appendChild(document.createElement('div')).innerHTML = "<p class='text-sm'>Welcome to Ireine's Emporium of Wonders! Nestled in the heart of the digital realm, our quaint little shop is a treasure trove of the rarest artifacts and most whimsical items you could ever imagine. From the dusty corners of ancient dungeons to the farthest reaches of the mystical skies, we've scoured all corners of the world (and a few others!) to bring you a collection like no other.<br> <br> Here, you'll find everything from the ordinary to the extraordinary. Looking for a potion to boost your mana? We've got shelves lined with them! Or perhaps you're in the market for something a bit more... unconventional? How about a Time-Twisting Teapot that lets you enjoy your tea break in slow motion, or the ever-popular Invisibility Cloak for those days when you just don't feel like dealing with dragons—or tax collectors. <br> <br> And for the adventurers who've seen it all, we dare you to take a ride on our latest acquisition: the Chrono Chariot, a time machine disguised as an ordinary merchant's cart.Perfect for those who want to do a little shopping in the past or future.Just remember to return it within your own timeline to avoid late fees! <br> <br> At Ireine's Emporium of Wonders, we believe that shopping should be an adventure, not a chore. Whether you're a brave knight, a cunning sorcerer, or just a curious wanderer, we've got something to add a bit of magic to your inventory. So step right in and discover the impossible, the unimaginable, and the inexplicably fun!</p><hr><h2>Today's Featured Wares</h2><p class='text-sm'>Dive into our selection of enchanting goods, each with its own tale to tell and magic to unleash:</p><ul><li><strong>Time-Twisting Teapot</strong> - Slow down time with every sip. Perfect for extended tea breaks. <em>Just don't spill it!</em></li><br><li><strong>Invisibility Cloak</strong> - Vanish in plain sight. Ideal for avoiding unwelcome encounters.</li><br><li><strong>Chrono Chariot</strong> - Shop through the ages in this time-traveling cart. <em>Late fees apply for time paradoxes.</em></li><br><li><strong>Elixir of Endless Energy</strong> - Say goodbye to sleep; this potion keeps you going through night and day.</li><br><li><strong>Wand of Wonder</strong> - It doesn't just cast spells; it creates surprises. <em>Use with caution.</em></li><br><li><strong>Gauntlets of Giant Strength</strong> - Feel the power of giants at your fingertips. <em>Door frames not included.</em></li><br><li><strong>Mystic Map</strong> - Reveals the unseen. Discover hidden treasures or the nearest tavern.</li><br></ul><hr><p class='text-sm'>Each item in Ireine's inventory comes with a story of its own, promising not just a purchase, but an adventure. Ready to add some magic to your life? Visit Ireine's Emporium of Wonders, where the wonders of the world (and beyond) await!</p>"
    }










    return {
        setMenuContent,
    }

})();

export { MenuModule }

