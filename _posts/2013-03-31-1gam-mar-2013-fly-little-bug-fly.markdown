---
title: Announcing "Fly, Little Bug, Fly!", my Third One Game a Month Game
category: programming
layout: post
---

This month we made a game with a bug that uses a big flower seed to float his way through a swamp,
assisted by a bit of wing power.

Try it here: <http://dobesv.com/1gam-FlyLittleBugFly/>

Source code here: <http://dobesv.com/1gam-FlyLittleBugFly/>

## Lessons Learned

I used Playcraft to code it this time, and as before it's a good start to library, although somewhat buggy and
still missing a lot of stuff.  I ended up making a number of pull requests with bug fixes and improvements to
Playcraft in the process of making the game.

This time we used [Tiled](http://www.mapeditor.org/) map editor to lay out the maps.  Tiled isn't too pretty but
it gets the job done well enough.

One drawback of using a Tiled TMX file with Playcraft is that you cannot load the XML file from a file:// URL due
to browser security policy.  So I had to help the non-programmers figure out a way to run the game off a web
server instead of just loading it from the file system.  I think as an improvement to the Tiled/Playcraft combo
they could add JSONP support.  Perhaps I might attempt this myself, although the Tiled project looks a bit daunting
to get started with.

## Credits

All the graphics are original artwork by [Glenn Martin](http://bunyep.com).

Programming by [Dobes Vandermeer](http://dobesv.com).

Original music by [Christopher Tyler Nickel](http://www.christophernickel.com/)

[Di Wu](http://www.diwugamedesign.com/) helped out with the game design, testing, and
level design this month.

Sounds:

 - Buzzes made by Dobes Vandermeer mucking around in audacity, badly need replacing
 - orb_pickup is from http://freesound.org/people/Soughtaftersounds/sounds/145459/
 - splash from http://freesound.org/people/CGEffex/sounds/93082/


