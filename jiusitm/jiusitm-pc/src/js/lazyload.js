(function() {
    // 实现懒加载
    function lazyload() {
        // 1、需要获取到所有需要延时加载的图片
        var imgs = document.querySelectorAll(".lazyload");
        // 2、过滤掉不是图片的标签
        imgs = Array.prototype.filter.call(imgs, function(item) {
            return item instanceof Image;
        });
        lazy();
        window.addEventListener("scroll", throttle(lazy, 100)); //  给window绑定滚动事件
        window.addEventListener("resize", throttle(lazy, 100));

        function lazy() {
            if (imgs.length === 0) return; // 当前数组中没有需要监听的图片了
            // 获取浏览器可视区的高
            var clientHeight =
                document.documentElement.clientHeight || document.body.clientHeight;
            // 如果进入到可视区，就动态给图片添加真实的图片地址
            for (var i = 0; i < imgs.length; i++) {
                // 判断图片是否进入可视区  bottom>0  && top<浏览器可视区高
                var rect = imgs[i].getBoundingClientRect();

                var bottom = rect.bottom;
                var _top = rect.top;
                // 以下条件成立，代表元素进入到可视区
                if (bottom > 0 && _top < clientHeight) {
                    // 把自定义属性上的真实地址赋值给图片
                    imgs[i].src = imgs[i].dataset.src;

                    var index = imgs.indexOf(imgs[i]);
                    imgs.splice(index, 1);
                    i--;
                }
            }
        }
    }


    // 节流函数

    function throttle(fn, delay) {
        var timer = null;
        return function() {
            var self = this;
            var args = arguments;
            if (timer) return;
            timer = setTimeout(function() {
                // 函数体执行代码
                fn.apply(self, args);
                // 开锁
                timer = null;
            }, delay);
        };
    }

    window.lazyload = lazyload;
})();