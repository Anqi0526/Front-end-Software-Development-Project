(function() {
    const close = document.querySelector('.close');
    const content = document.querySelector('.consult-left-form');
    const consultLeft = document.querySelector('.consult-left');
    close.addEventListener('click', function gb() {
        content.classList.remove('disappear');
        consultLeft.classList.remove('active');
    });
    consultLeft.addEventListener('click', function open() {
        this.classList.add('active');
        content.classList.add('disappear');
    });
    let flag = true;
    window.addEventListener('scroll', function more() {
        if (this.scrollY >= 1500) {
            if (flag) {
                content.classList.add('disappear');
                consultLeft.classList.add('active');
            }
            flag = false;
        } else {
            content.classList.remove('disappear');
            consultLeft.classList.remove('active');
            flag = true;
        }
    });
})();