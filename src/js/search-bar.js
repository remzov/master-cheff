export default (searchToggler, searchBar, searchClose, searchInput) => {
    searchBar.opened = false;

    searchToggler.addEventListener('click', () => {
      (!searchBar.opened) ? showSearchBar(searchBar) : hideSearchBar(searchBar);
      searchBar.opened = !searchBar.opened;
    });

    searchClose.addEventListener('click', () => {
      hideSearchBar(searchBar);
      searchBar.opened = false;
    });

    function hideSearchBar(searchBar) {
      searchBar.classList.remove('search-bar_slide-in');
    }

    function showSearchBar(searchBar) {
      searchBar.classList.add('search-bar_slide-in');
      searchInput.focus();
    }
};
