# New Relic JW Player Tracker


The New Relic JWPlayer tracker instruments the JW Player.

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

### Examples

Check out the `samples` folder for complete usage examples.

## Known Limitations
Due to the information exposed by player provider, this tracker may not be able to report:
- `adPosition`.

# Open source license

This project is distributed under the [Apache 2 license](LICENSE).

# Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Community

> TODO: Work with the Explorer's Hub team to create a tag for your app, then update the link below.

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

https://discuss.newrelic.com/t/{{ APP_NAME }}
*(Note: This URL is subject to change before GA)*

## Issues / enhancement requests

> TODO: Update path

Issues and enhancement requests can be submitted in the [Issues tab of this repository](../../issues). Please search for and review the existing open issues before submitting a new issue.

# Contributing

> TODO: Work with the Open Source Office to update the email alias below.

Contributions are encouraged! If you submit an enhancement request, we'll invite you to contribute the change yourself. Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource+{{ APP_NAME }}@newrelic.com.
