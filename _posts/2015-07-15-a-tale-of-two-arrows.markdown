---
title: A Tale of Two `->`'s
category: programming
layout: post
---

In programming we run into the `->` operator or "function arrow" more and more often.  But did you know that this arrow is actually standing in for two different yet related arrows?

Thanks to languages like [CoffeeScript](http://coffeescript.org) and [Java](http://java.com) we very commonly see this `->` used to define an [anonymous function](https://en.wikipedia.org/wiki/Anonymous_function).  A "lambda" as they call it.  Using notation like `args -> body`.  In pure mathematical notation you would normally use the "↦" symbol ("arrow from bar") for defining an actual function.

In functional programming languages like Haskell and ML we also see `->` used as a constructor for function types, like `String -> Int -> Int`.  In mathematical notation, this would be written "→" normally, and represents the set of all functions with domain (input type) of the left side and range (output type) of the right side.

These two are similar yet different.  The result of "↦" is (mathematically speaking) a set of pairs mapping inputs to output; because the set of pairs is usually very large we write them in an abstract manner.  The result of "→" is a set of functions - a set of sets of input ↦ output pairs.

In languages (like [Haskell](https://www.haskell.org/)) employing both kinds of `->`, context is typically used to distinguish which arrow is being used at the time.  In Haskell's case there are basically two languages: one for terms (the actual program) and one for types (like function types).  When Haskell is parsing a type annotation it interprets `->` as the function type constructor.

I hope this has been enlightening!
