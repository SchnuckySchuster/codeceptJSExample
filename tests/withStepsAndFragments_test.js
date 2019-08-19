Feature('Searching for articles in the german wikipedia using test steps');

Scenario("I find the article I'm searching for (using custom steps) @usingSteps", (I) => {
	I.amOnAnIPadInLandscapeModus();
	I.amOnPage('https://de.m.wikipedia.org/wiki/Wikipedia:Hauptseite');

	I.searchForArticle("Zwiebel");

	I.seeInTitle("Zwiebel");
});
