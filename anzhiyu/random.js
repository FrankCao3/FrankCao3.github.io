var posts=["posts/undefined.html","posts/58062.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/undefined.html","posts/13924.html","posts/56867.html","posts/46010.html","posts/57923.html","posts/14352.html","posts/45651.html","posts/27704.html","posts/35017.html","posts/52620.html","posts/47846.html","posts/15024.html","posts/24202.html","posts/52184.html","posts/31730.html","posts/38070.html","posts/38032.html","posts/58901.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};