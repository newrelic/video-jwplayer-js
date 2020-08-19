import * as nrvideo from 'newrelic-video-core'
import { version } from '../package.json'

export default class JwplayerAdsTracker extends nrvideo.VideoTracker {
  getTrackerName () {
    return 'jwplayer-ads'
  }

  getTrackerVersion () {
    return version
  }

  getDuration () {
    return this.duration
  }

  getSrc () {
    return this.resource
  }

  getPlayhead () {
    return this.playhead
  }

  getTitle () {
    return this.title
  }

  getAdCreativeId () {
    return this._creativeId
  }

  registerListeners () {
    nrvideo.Log.debugCommonVideoEvents(this.player, [
      null, 'adBreakStart', 'adBreakEnd', 'adBlock', 'adStarted', 'adImpression', 'adPause', 'adPlay', 'adSkipped', 'adComplete',
      'adClick', 'adError', 'adRequest'
    ])

    this.player.on('adBreakStart', this.onBreakStart.bind(this))
    this.player.on('adBreakEnd', this.onBreakEnd.bind(this))
    this.player.on('adBlock', this.onBlock.bind(this))
    this.player.on('adTime', this.onTime.bind(this))
    this.player.on('adStarted', this.onStarted.bind(this))
    this.player.on('adImpression', this.onImpression.bind(this))
    this.player.on('adPause', this.onPause.bind(this))
    this.player.on('adPlay', this.onPlay.bind(this))
    this.player.on('adSkipped', this.onSkipped.bind(this))
    this.player.on('adComplete', this.onComplete.bind(this))
    this.player.on('adClick', this.onClick.bind(this))
    this.player.on('adError', this.onError.bind(this))
  }

  unregisterListeners () {
    this.player.off('adBreakStart', this.onBreakStart)
    this.player.off('adBreakEnd', this.onBreakEnd)
    this.player.off('adBlock', this.onBlock)
    this.player.off('adTime', this.onTime)
    this.player.off('adStarted', this.onStarted)
    this.player.off('adImpression', this.onImpression)
    this.player.off('adPause', this.onPause)
    this.player.off('adPlay', this.onPlay)
    this.player.off('adSkipped', this.onSkipped)
    this.player.off('adComplete', this.onComplete)
    this.player.off('adClick', this.onClick)
    this.player.off('adError', this.onError)
  }

  onBreakStart(e) {
    this.sendAdBreakStart()
  }

  onBreakEnd(e) {
    this.sendAdBreakEnd()
  }

  onBlock () {
    // Special event only for jwp
    this.emit('AD_BLOCKED', this.getAttributes())
  }

  onTime (e) {
    this.playhead = e.position
    this.duration = e.duration
  }

  onStarted (e) {
    this._creativeId = this.findNestedVal(e.ima, 'creativeId')
    this.resource = e.tag
    this.title = e.adtitle

    this.sendRequest()
    this.sendStart()
  }

  onImpression (e) {
    this.resource = e.tag
    this.title = e.adtitle
  }

  onPause (e) {
    this.sendPause()
  }

  onPlay (e) {
    this.sendResume()
  }

  onSkipped (e) {
    this.sendEnd({ skipped: true })
    this.resetValues()
  }

  onComplete (e) {
    this.sendEnd()
    this.resetValues()
  }

  onClick (e) {
    this.sendAdClick({ url: e.tag })
  }

  onError (e) {
    this.sendError({ errorMessage: e.message })
    this.sendEnd()
  }

  resetValues () {
    this.playhead = undefined
    this.duration = undefined
    this.resource = undefined
    this.title = undefined
    this._creativeId = undefined
  }

  findNestedVal(object, key) {
    let value;
    Object.keys(object).some((k) => {
        if (k === key) {
            value = object[k];
            return true;
        }
        if (object[k] && typeof object[k] === 'object') {
            value = this.findNestedVal(object[k], key);
            return value !== undefined;
        }
    });
    return value;
  }
}
