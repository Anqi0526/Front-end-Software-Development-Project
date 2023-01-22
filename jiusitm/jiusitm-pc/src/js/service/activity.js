(function(){
    var activity = document.querySelector(".header .site-header .price .activity");
    var laybox = document.querySelector(".laybox");
    var close = document.querySelector('.laybox .layboxcontent>span');
    activity.onclick=function(){
        laybox.style.display = 'block';
    }
    close.onclick = function(){
        laybox.style.display = 'none';
    }
})();