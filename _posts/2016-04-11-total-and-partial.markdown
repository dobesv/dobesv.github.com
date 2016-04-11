---
layout: post
category: programming
title: Do Partial Functions Exist?
---

# Do Partial Functions Exist?

Total functions are those which are defined for all inputs in their domain.  Normally, all functions 
are total because the domain of a function is the inputs for which it is defined.

So where does this distinction between total and partial functions come from?

In mathematics we rely on a human reader to understand the domain of a function and so we can be quite
precise in our definition of a function's domain.  It's easy enough to say that the function `head`
returns the first element of any non-empty list.

However, the programming systems we use lack this level of precision when specifying types.  They don't
allow us to specify that `head` takes a non-empty list whereas `length` takes any list at all.
So, what happens is that `head` must be declared to have a domain of any list at all - empty or not - even
though it isn't defined for empty lists.

This kind of function - one whose domain is smaller than its type indicates - has been given the name 
"partial function" and thus the normal functions whose domain matches their type are called "total
functions".

However, this all assumes that the enforcement of the domain of the function is all up to the type checker
of the programming system.  In reality, the programmer himself is part of the system and must work to
enforce the rules as well.

Thus the `head` function is total when you look at the bigger picture - one in which the precise 
domain of the function is enforced by the programmer, albeit without the usual assistance from the
type checker.  Just because the precise domain of the function is not visible to the type checker
does not mean it is not known at all.

So, although these things we call "partial functions" aren't just functions in principle, the term is
still practical for referring to functions where the type checker can only restrict inputs to some 
superset of the true domain of the function.  By calling out these functions we can better alert
ourselves to the need for care in their use.

### What about Total Functional Programming?

Total Functional Programming proposes the idea of "programming without partial functions".  

In practice, it just means that partial functions must become explicit, returning a `Maybe` or 
`Option` type in cases where the type checker cannot enforce the precise domain of the function.
The benefit of this is that the programmer need not be so vigilant - they must handle the
possibility of an undefined result.  The downside is the code becomes more verbose in cases where
the programmer has some certainty that the function IS defined for its input but is unable to
communicate that to the type checker.






