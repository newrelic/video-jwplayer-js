# CHANGELOG
All notable changes to this project will be documented in this file.

## [0.9.0] - 2020/09/29
### Update
- Core dependencies.

## [0.8.0] - 2020/09/01
### Update
- Core dependencies.

## [0.7.0] - 2020/08/19
### Fix
- `isMuted` attribute.

### Add
- `isFullscreen` attribute.
- `adCreativeId` attribute.

## [0.6.0] - 2020/08/13
### Fix
- Send `PLAYER_READY` from the tracker init instead of the ready event, that may never arrive if the tracker is started too late.

## [0.5.0] - 2020/08/11
### Update
- Core dependencies.

## [0.4.0] - 2020/06/15
### Add
- `AD_BREAK_START` and `AD_BREAK_END` events.

### Fix
- Wrong `adPosition` values.
- An `AD_REQUEST` was being sent after the ad break ended.

## [0.3.0] - 2020/05/04
### Fix
- Updated old buggy dependencies.

## [0.2.0] - 2018/04/11
### Add
- Add `timeSincePlayAttempt` at `CONTENT_START` that uses jwplayer ttff metric.


## [0.1.3] - 2017/09/28
### Remove
- Remove `adPosition` as player library is not reliable on that information.

### Change
- Added `*_END` after errors.

## [0.1.2] - 2017/09/12
### Fix
- Fix title not being reported correctly

## [0.1.1] - 2017/09/12
### Fix
- Fix ad listeners not registering correctly

## [0.1.0] 
- First Version