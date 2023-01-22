(function() {
    var typelist = document.querySelector(".product .typelist");
    window.onscroll = function(){
        if(this.scrollY>=65+360){
            typelist.style.boxShadow = '10px -15px 10px 10px #b5b5b5';
        }else{
            typelist.style.boxShadow = '';
        }
    }
})();


(function(){
    var ul = document.querySelector('.product .typelist ul');
    var currentli = ul.firstElementChild;
    var currentItem = document.querySelector(".product .mainbody .product-intro");
    ul.onclick = function(e){
        var target = e.target;
        var tagName = target.tagName.toLowerCase();
        if (tagName==='a'){
            currentli.classList.remove('active');
            target.parentNode.classList.add("active");
            currentli = target.parentNode;
        }else {
            return;
        };

        
    }
})();