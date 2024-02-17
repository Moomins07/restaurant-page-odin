import './css/style.css'

import { setHomeBackground, setNavBar } from './header';

(() => {

    function init() {
        setHomeBackground()
        setNavBar()
    }




    document.addEventListener('DOMContentLoaded', init)
})();

