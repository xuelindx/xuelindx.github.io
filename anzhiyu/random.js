var posts=["posts/a3d9.html","posts/db112152.html","posts/37ef.html","posts/187c.html","posts/1f1d5fa4.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};