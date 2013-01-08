---
layout: post
title: What would the ultimate web framework look like today?
category: programming
---

Some thoughts on what I would consider the ideal web framework.  Many of these ideas interact
with one another, making some pieces harder and some easier.

### Design: Designer-Friendly Templates Without Code

Whether your designer likes to work with jade or haml because they're a major CSS hacker, or HTML
because they are using DreamWeaver, the ideal web framework provides a sane method of attaching
event handlers and applying dynamic updates to the content without putting any significant amount
of "programmer" code into the templates.

The most that would be acceptable is maybe a 'javascript:doSomething()' here and there.

This makes life a lot easier for

### Performance: Fully Rendered First Page and Incremental Updates

Having the page load and then be updated using AJAX on the first load doesn't seem to give a good
user experience these days.  However, having to reload the page every time to you a change isn't ideal
either.

The ideal web framework should send down the whole page fully filled in and it will not require
any updates to the DOM by javascript code except in response to events.  The javascript on page
load should essentially just set up its event handlers and wait for something to happen.

When an event occurs, only the data really needed to update the page should be downloaded from
the server, incrementally updating the page using javascript.

express-jsdom is an example of this, and also this is similar to how AJAX updates are implemented
by the JSF frameworks.

### Usability: Deep-linkable URLs

If the user conceptually has changed from one "page" or "document" or "panel" in the application
it should be reflected in the URL so the user can copy/paste that URL somewhere, or the URL can
be logged for debugging purposes.  This happens automatically in systems where navigation is done
by serving a new page but often AJAX "single-page" applications miss this part or do it poorly.

The ideal web framework would make supporting this easy even if you are using AJAX to update the
page instead of serving new pages.

### Performance: Static/Cached/Pre-rendered Documents

The first time a user visits your site or loads your app is one of the most important times.  The
server should be able to send down the content very quickly, with little or no server-side processing.

In addition to caching you may even consider aggressively pre-rendering the first thing a user sees
after they login even though that content may be quite dynamic.

The ideal web framework makes it relatively easy to add caching support and to "prime the cache"
where appropriate.  Note that pre-compiling templates to static files as with Jekyll or DocPad
is a kind of pre-caching that is a good approach.

#### Partial Document Caching

Ideally the caching system can accomodate the concept of caching parts of a template separately so
that when an overall template is rederered

### Performance: Cache-Control headers

The second visit onwards should hit the server much less than the first time.  A web framework should
make it very easy to set appropriate Cache-Control headers for every response.

### Performance: Strong/Unique URLs For Cacheable Resources

For resources that change infrequently, it is helpful to adjust references to those resource so that they
have a unique URL.

The ideal web framework makes it easy to modify references to cacheable resources so that they have the fingerprint
appended.  And when fetching a resource the presence of a fingerprint means that the fingerprint is stripped
when identifying the "real" resource and caching headers are sent to make the resource live in the cache indefinitely.

It is better to use a digest hash for the fingerprint rather than the file mtime because in a clustered environment
the mtimes of files might vary from one host to another, causing unnecessary cache misses.

References:

* http://particletree.com/notebook/automatically-version-your-css-and-javascript-files/
* http://derek.io/blog/2009/auto-versioning-javascript-and-css-files/

### Performance: Support Content-Delivery Networks

The ideal web framework makes it easy to modify references to cacheable resources so that they go via a content
delivery network.  This functionality would go hand-in-hand with the strong URL generation.

### Flexibility: Content Negotiation

The server should apply the Accept and Accept-* headers supplied by the client to select the appropriate
content to send down.  Many frameworks rely on the URL alone (adding a suffix or query parameter to
indicate the content type and language, perhaps).  In the ideal web framework both options would be
supported because some clients will be using headers but in some cases you want an override using the
URL.

Apache CXF, Jersey, and JAX-RS frameworks provide a good example of this.

### Database: Easy Access to Database/Logs

It should be easy to create a kind of generic UI to access and query the database through the browser.

A good example of this from my experience is Django, whose database layer can use its metadata to generate a backend
administration UI to access the database.  Several other frameworks have followed suit after that.

### Logging

It should be easy to create a kind of generic UI to access and query the server logs through the browser.

I haven't seen much for logging.  You can use loggly now to have a web interface to logs but it's not very good.

### Convenience: Workers and Timers

The ideal web framework provides a sub-framework to help setup queue processing workers and scheduled jobs.  It
makes it easy to set these up so that the action is run just the right number of times, even in a cluster or
in case of failures.

### Convenience: Database Transactions

It almost goes without saying that the ideal web framwork makes it easy to initiate a database transaction and to
setup database transaction pools.  However, it should only allocate a database transaction for operations that
actually use the database.

### Convenience: Configuration

The ideal web framework makes it easy to configure the app for the machine you are on, without modifying the code.  I
remember with django I was initially quite puzzled as to how I would change, for example, the database username and
password so they are different on production than on development and staging machines.  I'm sure they have resolved
that problem but it is something that is easily forgotten.

In the J2EE world they have the JNDI which is quite powerful and has some OK tools to modify the configuration.  It
could be improved a lot.

### Monitoring: Easy to Monitor

The ideal web framework is easy to get performance data and logging out of, and it's easy to change the logging
levels even at runtime.

Lots of work has been done on this in the Java world and New Relic RPM is a great app that helps you check out
the performance of your app.

Ideally this would be built into the framework but just being compatible with New Relic RPM might be good enough.

### Convenience: Avoid Boilerplate

Almost all the code you write should be the part that makes your application different from 99% of the other web
applications, not common code to handle standard configuration and infrastructure stuff.  Even CSS and HTML
boilerplate can be built-in much of the time.

### Scalability: Minimize Use of Sessions

One pain point of scaling out a web application is the synchronization of HTTP sessions.  Is it helpful to
eliminate or reduce the use of cookie based sessions in favor of clent-side storage and other workarounds?

### Modularity - Pick and Choose

The system should be made of components that are not too tightly coupled.  Pieces could be taken out and
used without the core system, or replaced with in-house replacements.

### Rapid deployment of changes during development.

Refresh the page to see changes.  Tales framework and Play framework do this.

### Capability for zero downtime upgrades built-in.

### Unit testing.

### No more config files than necessary.  Routes, resource, and entities defined in code.

### Modular layout, document oriented content

### Self documenting API?


### Persistence

Hibernate style persistence creates regret later because of all the work it does to detect changes.  It fails
miserably on large batch jobs.

CouchDB / MongoDB seem to be popular because of their simple API and mode of use.

ActiveRecord is also popular.  It's model is to dynamically create objects based on the database schema rather
than create a database schema from object metadata.  Seems smart in a way.

Perhaps a scheme where you can create objects that wrap a database.  From there you can have it give you objects
for tables in the database and rows and columns in the table.  These objects (particularly rows) can be converted
to/from a POJO easily.  Relationships needs to be mapped intelligently.  The modelling shouldn't be too SQL
specific at the top level - ideally we can also share code with NoSQL database access too.

I think it's helpful to be close to the database - explicit read/write operations rather than modifying objects
in a "session" and then "saving all changes"

Closest to the database would be to write your own query plans, just using an underlying
BTree implementation like JDBM, JavaDB, or Globals.


References:

- http://misko.hevery.com/2009/05/05/the-problem-with-active-record/


