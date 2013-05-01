---
title: "Announcing Laser Puzzle V2, April #1GAM"
category: programming
layout: post
---

For April we decided to upgrade the laser puzzle game from February with some new levels and port
it to new platforms.

How to play: rotate the pieces until the lasers reach the sensors of the same color.  When all the
sensors are activated, you win!

Try it here: <http://dobesv.com/1gam-LaserPuzzle/>

Source code here: <http://dobesv.com/1gam-LaserPuzzle/>

## New Levels / Features

Duncan made up a series of new levels involving some new features:

* Sensors on the top and left, emitters on the bottom and right
* Alternative direction for mirrors
* Opaque/solid piece that doesn't allow any light through
* Areas with no pivot at all

We also added some other features not related to level design:

* UI Resizes to fit the screen
* Sound/music control to turn off the music and sound effects
* New pop-up for credits
* Little "clue" that shows on the first level so people know what to do.

## Facebook App using Heroku

I wanted to see what it would be like to make it into a facebook app.  It turned out
to be relatively easy.  Heroku provides free hosting if your app doesn't get a lot of
use.

## CocoonJS for Android and iOS App

I used CocoonJS to build a mobile app from the game.  CocoonJS accelerates the rendering
of the game and packages it into an app.  In the browser the game ran quite slowly, so
but CocoonJS brought the frame rate back up.  This is, I believe, an advantage over
PhoneGap Build because PhoneGap doesn't accelerate the rendering.

CocoonJS is still in a fairly buggy/incomplete state, it has terribly forums and minimal
support.  But after some mucking around I got things working.  The game still seems to have
some visual issues - I had a case where some of the pivots/filters stopped rendering and I've
frequently had the screen flash black briefly - I suspect due to a pause in the app logic.  The
app was relatively small in my mind but it was apparently using a lot of memory.  So, the
CocoonJS approach has a long way to go but lots of promise.

## Credits

All the graphics are original artwork by my partner in crime [Glenn Martin](http://bunyep.com).

Game mechanic Duncan Shields (thought of the rotating pieces) with help from Dobes Vandermeer,
Leigh Tingle, and Glenn Martin.

The new levels are made by Duncan Shields, the old levels were made by Dobes Vandermeer and Glenn
Martin.

Programming by me - [Dobes Vandermeer](http://dobesv.com).

Original music by [Christopher Tyler Nickel](http://www.christophernickel.com/)

Sounds:

- Door noise from http://www.trekcore.com/audio/
- Applause from http://www.soundjay.com/applause-sounds-1.html
- Level complete from http://noproblo.dayjo.org/ZeldaSounds/
- Beep from http://archive.org/details/TickSound
- Pivot sound from http://soundcli.ps/sound/camera-shutter-3





