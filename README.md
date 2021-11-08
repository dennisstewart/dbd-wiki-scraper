# dbd-wiki-scraper
Custom functions for Google Sheets to pull data from the Dead by Daylight Wiki. 

I built these for a friend who's very into DBD and Google Sheets. I've used Apps Script to make API calls before, but this was my first time parsing HTML with [Cheerio](https://github.com/tani/cheeriogs).


## Usage

```=listSurvivors()```

Fills column with a list of survivors' names from the Wiki

```=listKillers()```

Fills column with a list of killers' titles from the Wiki

```=currentPatch()```

Gets the most recent major patch number ('5.3' at time of writing) from the Wiki

```=currentChapter()```

Gets the most recent Chapter ('CHAPTER XXI: Hellraiser™' at time of writing) from the Wiki
