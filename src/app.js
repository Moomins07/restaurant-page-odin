import './css/style.css'

import { HomeModule } from './HomeModule';


(() => {


    function init() {
        HomeModule.setHomeBackground();
        HomeModule.setNavBar();
        HomeModule.setMainContent();
        HomeModule.setEventListeners();
    }




    document.addEventListener('DOMContentLoaded', init)
})();

