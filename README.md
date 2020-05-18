[![Community Project header](https://github.com/newrelic/open-source-office/raw/master/examples/categories/images/Community_Project.png)](https://github.com/newrelic/open-source-office/blob/master/examples/categories/index.md#community-project)

# New Relic JW Player JS Tracker


The New Relic JWPlayer tracker instruments the JW Player. It requires New Relic Browser Pro with SPA.  It must be used on a page where the New Relic Browser JS Snippet is present.   See the `samples` folder for an example.

## Build

Install dependencies:

```
$ npm install
```

And build:

```
$ npm run build:dev
```

Or if you need a production build:

```
$ npm run build
```

## Usage
Load **scripts** inside `dist` folder into your page.
```html
<script src="../dist/newrelic-video-jwplayer.min.js"></script>
```

> If `dist` folder is not included, run `npm i && npm run build` to build it.

```javascript
// var player = jwplayer('my-player')
nrvideo.Core.addTracker(new nrvideo.JwplayerTracker(player))
```
### Custom Attributes
You can add custom attributes in the following ways.  You can override OOTB attributes or create your own.
```
// set tracker
// add custom attributes at player launch

const tracker = new nrvideo.JwplayerTracker(player,{ customData: { 
  contentTitle: "Override Existing Title",
  myPlayerName: "myPlayer", 
  myPlayerVersion: "9.4.2"
} })

nrvideo.Core.addTracker(tracker)

// add custom attribute anywhere 
tracker.customData.myErrorMsg = "DVR Failed"
```

### Verify instrumentation

On the page you've instrumented...

&nbsp;&nbsp; Is Browser Agent loaded? → Type `newrelic` in the console.

&nbsp;&nbsp; Is Video Script Loaded? → Type `nrvideo` in the console.

&nbsp;&nbsp; Turn on debug → add `?nrvideo-debug=true` or `&nrvideo-debug=true` in the URL.

&nbsp;&nbsp; Is Video Tracker correctly instantiated? → filter console by `[nrvideo]` and look for logs.

&nbsp;&nbsp; Search for `Tracker` or `nrvideo`.

&nbsp;&nbsp;&nbsp;&nbsp;<img width="200" alt="Console Search" src="https://user-images.githubusercontent.com/8813505/82217239-22172c00-98e8-11ea-9aa3-a9a675fd65a5.png">

### Examples

Check out the `samples` folder for complete usage examples.

## Data Model

To understand which events (actions) and attributes are captured and emitted by the JW Player tracker go [here](https://docs.google.com/document/d/e/2PACX-1vSECNAxbKmYYOH23rA5k02NTEZDX20PTx1VXB_3Kz8gVBwUCdlPpizTrxu9lO6jW1-wXd5Yq4q_IUH6/pub#h.o16zqioqw5dk)

## Known Limitations
Due to the information exposed by player provider, this tracker may not be able to report:
- `adPosition`.

# Open source license

This project is distributed under the [Apache 2 license](LICENSE).

# Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Community

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

https://discuss.newrelic.com/t/jw-player-js-tracker/100304

## Issues / enhancement requests

Issues and enhancement requests can be submitted in the [Issues tab of this repository](../../issues). Please search for and review the existing open issues before submitting a new issue.

# Contributing

Contributions are encouraged! If you submit an enhancement request, we'll invite you to contribute the change yourself. Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource+videoagent@newrelic.com.
