---
title: Announcing Laser Puzzle, my Second One Game a Month Game
category: programming
layout: post
---

This is a prototype of a mini-game concept for a bigger game.

How to play: rotate the pieces until the lasers reach the sensors.  When all the sensors are
activated, you win!

For my second one game a month challenge I initially tried writing it in Lua, using Marmalade Quick.  Then I re-wrote
it using javascript and the playcraft javascript library.

Try it here: <http://dobesv.com/1gam-LaserPuzzle/>

Source code here: <http://github.com/dobesv/1gam-LaserPuzzle/>

## Lua

I remember a long time ago when I first ran into Lua, before it even used much for game development, I really liked
it.  Oh, how the times have changed!  Now I find it is not a fun language at all.

On the plus side, Lua has pretty good documentation and I could reload my changes almost instantly without a full
restart of the game.

IF Lua had a really great IDE I might have been happy with it.  Unfortunately, Lua's highly dynamic and flexible nature
makes writing an IDE that does useful things like refactoring, error checking, and "jump to definition"
very, very difficult.  There are some honest attempts but for my project they didn't work.

Lua has a lot of gotchas, surprisingly so.  Almost as many as Javascript in my opinion.  Same problem with
using global variables (instead of reporting an error) when you refrence an undefined name.  When you define a function
inside another function it has to be explicitly declared local or it will be globally assigned.  There are things
about Lua that I dislike, which are not a problem in Javascript: the lack of a ternary conditional expression
(?:), the use of keywords instead of punctuation to delimit things, limited standard library out of the box (no
math.round(), no shorthand to get an individual character from a string).

## Marmalade Quick

Marmalade Quick I wasn't too impressed with - despite labelling Marmalade Quick as a verion 1.0, it was still very
much in beta form.  I ran into some bugs and quirks, and my questions about them were not answered promptly on their
Q&A site.  The support for Marmalade is not very good - a few times I've attempted to make use of the forums or Q&A
site and a decent number of my questions were not answered promptly, or not answered at all.

I wanted to make a downloadable version of my game for at least Windows, if not Mac OS X, but I couldn't figure out
how to make it work and my question about it on the Q&A site was not answered.

## Javascript

After my inability to make a distribution of my game via Marmalade I decided I could try porting the game to
straight up Javascript.  This actually turned out be fairly pleasant.  My PHP/Javascript IDE PHPStorm has a
number of Javascript features including auto-complete after a '.', jump to definition, simple error checking, and
some simple refactorings.

## Playcraft

The thing that impressed me about [Playcraft](http://playcraftlabs.com/) was their demos - they look great,
have sound, and and great frame rates (on my machine, anyhow).  That gives me some confidence that I can make a
good game on those platforms.

The playcraft API is relatively well organized and documented.  It took me a little while to figure out how
the rotation and scaling work.  It turns out that they maintain the same top-left anchor point when rotating and
scaling, which means your x,y coordinate is upper-left corner of the image before transforms are applied.

It is currently in beta, and I did run into one bug I had to tweak in their library.

Generally, however, I liked playcraft.  I think when some of their more interesting features start to show
up, like the editor, mobile device deployment, and so on it'll be worth spending money on.

## Credits

All the graphics are original artwork by my partner in crime [Glenn Martin](http://bunyep.com).

Game mechanic by Duncan Shields (thought of the rotating pieces) with help from Dobes Vandermeer,
Leigh Tingle, and Glenn Martin.

Programming by me - [Dobes Vandermeer](http://dobesv.com).

Original music by [Christopher Tyler Nickel](http://www.christophernickel.com/)

Sounds:

- Door noise from http://www.trekcore.com/audio/
- Applause from http://www.soundjay.com/applause-sounds-1.html
- Level complete from http://noproblo.dayjo.org/ZeldaSounds/
- Beep from http://archive.org/details/TickSound
- Pivot sound from http://soundcli.ps/sound/camera-shutter-3





