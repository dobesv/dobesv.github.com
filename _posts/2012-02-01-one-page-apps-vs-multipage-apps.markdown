---
title: Web Development: One-page apps or multi-page apps?
category: programming
layout: post
---

## First, What's a "One Page Web App"?

The last couple of apps I've made were "one page apps".  You put all your javascript on the page, load it up, and
never browse to another "page" after that.  Instead your UI updates dynamically on the page, potentially changing
it's appearance completely as the user interacts with it, but without starting fresh with a new page load.

The user may perceive that they have "changed pages" when in fact they're looking at a page that was updated
dynamically by loading data from the server.

## Theoretical Benefits

The benefits of this approach is that some things do not have to be reloaded while you use the application.  Images,
CSS, Javascript, and HTML that were loaded before can stay in memory, already parsed.  Even some application data
might be "cached" on the client side so that if you navigate to some document twice in succession the data is
"already there".

Also, by fetching data in a more low-level format instead of pre-rendered HTML you offload work from the server.  Any
client-side caching you do also means less work for the server, in theory.

## Theoretical Drawbacks

It may take longer to load the page because you have more of your application loaded up front.  You keep more
loaded in memory (due to caches, copies of data, and invisible images/elements) and so your browser uses more
memory on the end-user's computer.

## In Practice

I had previously thought that it would be faster to load data from the server and manipulate the user interface using
client-side code but I've found that the browser can always render pure HTML far faster than javascript code
can create DOM nodes from serialized objects.

Browsers are really good at using their own cache to load new pages quickly if they contain many common
elements, especially if the markup is simple, so you don't see a huge performance boost for the end user
from having images and CSS already loaded.

People have slow computers and you can't upgrade everyone's computer.  You can upgrade your server, and if
you throw a decent amount of money at it you should be able to serve up new pages super fast.

Adding a good cache on the server-side and pre-loading it a bit should allow you to serve many pages almost
instantly.

## Striking a Balance

Recent developments with HTML5 make it possible to do a bit of trickery where when a user navigates between
pages you can send down just the differences and update the URL bar as if they'd really changed pages.

This may be more work for the server because it has to calculate those differences to some degree, but I think the
page update will be faster than sending raw data down to some client-side JS or doing a full page transition.

For future apps this may be the approach that I would take.

If you're a web developer, let me know your thoughts and experiences in the matter.  Is this the direction highly
responsive web apps are going?















