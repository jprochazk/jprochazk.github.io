---
layout: home
---

<ul>
  {% for post in site.posts %}
    <li>
        <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
        <p>
        {{ post.excerpt | strip_html | truncate: 85, " ... " }}
        </p>
    </li>
  {% endfor %}
</ul>