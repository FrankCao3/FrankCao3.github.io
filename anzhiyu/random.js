var posts=["posts/16107.html","posts/58062.html","posts/13924.html","posts/61497.html","posts/57923.html","posts/14352.html","posts/56867.html","posts/45651.html","posts/27704.html","posts/46010.html","posts/52620.html","posts/47846.html","posts/35017.html","posts/15024.html","posts/24202.html","posts/52184.html","posts/38070.html","posts/31730.html","posts/38032.html","posts/58901.html","posts/34953.html","posts/39395.html","posts/58219.html","posts/57467.html","posts/45471.html","posts/24600.html","posts/11796.html","posts/12746.html","posts/26401.html","posts/7933.html","posts/25956.html","posts/2282.html","posts/18452.html","posts/59563.html","posts/15275.html","posts/9423.html","posts/50843.html","posts/28758.html","posts/1106.html","posts/1079.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};