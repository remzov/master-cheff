import './uikit';
import './sprite';

//search-bar toggler
import searchBarToggler from './search-bar';

const searchElements = {
    searchToggler: document.querySelector('.js-search-btn'),
    searchBar: document.querySelector('.js-search-bar'),
    searchClose: document.querySelector('.js-search-close')
};

searchBarToggler(searchElements);

//catalog toggler
import catalogToggler from './catalog';

const catalogElements = {
    catalog: document.querySelector('.catalog-full'),
    controlBar: document.querySelector('.control-bar'),
    catalogOpenBtn: document.querySelector('.js-catalog-btn'),
    catalogCloseBtn: document.querySelector('.js-catalog-close')
};

catalogToggler(catalogElements);

//menu toggler
import menuToggler from './menu';

const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.nav');

menuToggler(menuBtn, menu);