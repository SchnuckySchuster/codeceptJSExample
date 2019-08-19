const { I, searchBarFragment } = inject();
// Add in your custom step files

Given('I a have an ipad in my hand in horizontal orientation', () => {
	I.amOnPage('https://de.m.wikipedia.org/wiki/Wikipedia:Hauptseite');

  I.amOnAnIPadInLandscapeModus();
});


When('I search for a random article', () => {
	I.click(searchBarFragment.searchField);
  I.typeOnKeyboard("Zwiebel");
  I.pressKey('Enter');
});

Then('I want to find the article', () => {
  I.seeInTitle("Zwiebel");
});
