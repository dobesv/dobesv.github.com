---
title: One Game a Month, Month 1: Cityburner
category: programming
layout: post
---

## What's One Game A Month? (aka 1GAM)

The [one game a month project](http://onegameamonth.com/) is a quest to try to create one new game each month. This challenge is meant to
help its participants on a personal level. There are no prizes, signup fees or rules.

I signed up because I'd started my new career as a full time indie game developer last May and so far produced
no games at all.  I want to shift my energy around this and build some momentum.  This also is a great learning
opportunity as these monthly games are a bit of a throwaway so I can mess around with some different
technologies or game mechanics.

## The first game

For my first game I wanted to set the bar pretty low; it's more important to get something done than try to make
some kind of really impressive work of grand art.  I've got some other projects on the go, too, so I didn't want
to spend a ton of time on this.

I had this idea pop into my head that my 4-year-old son might enjoy a game where you kind of just tap the screen to
shoot lasers and blow stuff up.  This turned into a side-scrolling game with a robot shooting lasers at
buildings which then light on fire.  When I showed it to my son he suggested I turn the fires blue and make them
flowers.  So ... that gives me some ideas for a future game of the month :-).

You can see the result here: <http://dobesv.github.com/cityburner>

## Elm and Functional Reactive Programming

I made the game using an experimental programming language called [Elm](http://elm-lang.org/) which outputs an
HTML and Javascript game playable in the browser.  It was a good learning experience about programming language
design and what HTML5 games can be like.

Functional reactive programming is a great idea.  It seems like I can make the game with a lot less code, both
because of the use of functional programming and also because I'm relying on the compiler and runtime to compute
the incremental updates.  The obvious downside of this is that if the system isn't producing a fast app, you're
stuck.

Elm is nice for little animations but not quite ready for full games yet.  The compiler is pretty slow (it
took >60 seconds to compile this game after each change).  The game itself runs pretty slowly, too - on my
computer it uses maximum CPU and the graphics stutter a bit.

I think the performance will improve over time, so if it's not 2013 any more you can ignore all this talk about
performance, it's like to have improved in leaps and bounds.

## Adobe Edge Animate

For this project my friend Glenn did the graphics and the animation.  He did the animation in Adobe Edge Animate
with is a (currently) free application like Flash except it generates HTML, CSS, and Javascript.  I think
Adobe has taken a step in the right direction here - I'm impressed at how they are generating code that you
can embed and re-use in your page or application.  You can write javascript actions right into Edge Animate as
well.

I think Edge Animate will soon be as good a platform for games as Flash - perhaps better, if you throw in the
Adobe PhoneGap Build project which can take your HTML5 game and turn it into an app for Android, iOS, and
various other platforms.

Edge Animate still relies on HTML5, however, which doesn't provide a totally consistent experience across browsers;
the support for sound, the appearance of fonts, and the rendering performance vary greatly between devices and
browsers so I think one should still have some caution in adopting HTML5 for a game that has a lot of complexity
to it.

