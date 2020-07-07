---
layout: default
title: Jan Procházka
---

Hi. [some post]({% post_url 2020-07-07-welcome-to-jekyll %})


{% highlight js linenos %}
const test = document.createElement('canvas');

for(const a of (()=>{ return [1,2,3] })()) {
    console.log(a);
}
{% endhighlight %}