# newrelic-video-jwplayer [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
#### [New Relic](http://newrelic.com) video tracking for JWPlayer

## Requirements
This video monitor solutions works on top of New Relic's **Browser Agent**.

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

## Known Limitations
Due to the information exposed by player provider, this tracker may not be able to report:
- `adPosition`.