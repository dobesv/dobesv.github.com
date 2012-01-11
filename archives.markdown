This is a list of all the posts in this blog.

{% for post in site.posts limit: 5 %}
* {{ post.date | date:"%Y-%m-%d" }} [{{ post.title }}]({{ post.url }})
{% endfor %}
