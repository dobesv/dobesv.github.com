---
layout: index
title: Dobes' Site
---

# Enlightenment

{% for post in site.posts limit: 5 %}
* {{ post.date | date:"%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
