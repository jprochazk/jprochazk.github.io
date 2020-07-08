---
layout: default
---

<div class="container">
    <ul>
    {% for post in site.posts %}
        <div class="link" data-target="{{ post.url }}">
            <li>
                <span class="post-link">{{ post.title }}</span>
                {{ post.date | date_to_string: "ordinal", "US" }}
                <p>{{ post.excerpt | strip_html | truncate: 110, " ... " }}</p>
            </li>
        </div>
    {% endfor %}
    </ul>
</div>