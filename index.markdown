---
layout: index
title: Dobes' Site
---

{% for post in site.posts 5 %}
* {{ post.date | date:"%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}

