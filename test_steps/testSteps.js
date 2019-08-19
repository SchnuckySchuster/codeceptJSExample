const {searchBarFragment} = inject();

module.exports = function() {
  return actor({

    searchForArticle: function (text) {
      this.click(searchBarFragment.searchField);
      this.typeOnKeyboard(text);
      this.pressKey('Enter');
    }

  });
}
