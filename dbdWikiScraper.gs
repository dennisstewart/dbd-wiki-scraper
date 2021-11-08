/**
 * Retrieves the current Dead by Daylight chatper from the DBD wiki.
 * 
 * @return current chapter name
 * @customfunction
 */
function currentChapter() {
  var response = UrlFetchApp.fetch("https://deadbydaylight.fandom.com/wiki/Chapters").getContentText();
  //Logger.log(response.getContentText());

  const $ = Cheerio.load(response);
  //Logger.log($(".mw-parser-output ul li").last().text());

  return $(".mw-parser-output ul li").last().text();
}

/**
 * Retrieves the current Dead by Daylight version (approximate) from the DBD wiki.
 * 
 * @return current patch version (x.y)
 * @customfunction
 */
function currentPatch() {
  var response = UrlFetchApp.fetch("https://deadbydaylight.fandom.com/wiki/Category:Patches").getContentText();
  //Logger.log(response.getContentText());

  const $ = Cheerio.load(response);
  var items = $(".mw-category-group ul li").text();
  //Logger.log(items);
  //Logger.log(items.lastIndexOf('Notes'))
  //Logger.log(items.slice(items.lastIndexOf('Notes ')+6, items.lastIndexOf('Notes ') + 9))

  return items.slice(items.lastIndexOf('Notes ')+6, items.lastIndexOf('Notes ') + 9);
}

/**
 * Returns a list of all survivors from the DBD wiki
 * 
 * @return names of all playable survivors
 * @customfunction
 */
function listSurvivors() {
  var response = UrlFetchApp.fetch("https://deadbydaylight.fandom.com/wiki/Survivors").getContentText();
  const $ = Cheerio.load(response);
  var survivorList = [];

  var firstSurvivor = $("a[title^='Dwight']").first();
  //Logger.log(firstSurvivor.text());
  var allSurvivors = firstSurvivor.parent().parent().children();
  //Logger.log(allSurvivors.text());
  allSurvivors.each(function (i, elem) {
    survivorList[i] = $(this).text();
  });
  //Logger.log(survivorList);

  return survivorList;
}

/**
 * Returns a list of all killers from the DBD wiki
 * 
 * @return titles of all playable killers
 * @customfunction
 */
function listKillers() {
  var response = UrlFetchApp.fetch("https://deadbydaylight.fandom.com/wiki/Killers").getContentText();
  const $ = Cheerio.load(response);
  var killerList = [];

  var firstKiller = $("a[title^='Evan MacMillan']").first();
  //Logger.log(firstKiller.text());
  var allKillers = firstKiller.parent().parent().children();
  //Logger.log(allKillers.text());
  allKillers.each(function (i, elem) {
    var killer = $(this).text();
    killerList[i] = killer.slice(killer.indexOf('- ') + 2, killer.length);
  });
  //Logger.log(killerList);

  return killerList;
}
