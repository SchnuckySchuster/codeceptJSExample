Feature('Searching for articles in the german wikipedia');

Scenario("I find the article I'm searching for @noSteps", (I, searchBarFragment) => {
	I.amOnAnIPadInLandscapeModus();
	I.amOnPage('https://de.wikipedia.org/wiki/Wikipedia:Hauptseite');

	I.click('//*[@id="searchInput"]');
  I.typeOnKeyboard("Zwiebel");
  I.pressKey('Enter');

	I.seeInTitle("Zwiebel");
});
