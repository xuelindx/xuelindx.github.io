var posts=["posts/undefined.html","posts/db112152.html","posts/1f1d5fa4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};