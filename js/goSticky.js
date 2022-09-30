document.addEventListener("DOMContentLoaded", init);
function init() {
    let headers = document.getElementsByClassName('header-wrapper');
    let top = {};
    for(let i = 0; i< headers.length; i++){
        let cord = headers[i].getBoundingClientRect().top + pageYOffset;
        top[cord] =  headers[i];
    };
    window.addEventListener('scroll', scroll);

    function scroll() {
        let fix;
        let i = 0;
        for(let x in top){
            if(((i==0)&&(pageYOffset>x))||((i!==0)&&(pageYOffset >= x - 50))){
                fix = top[x];
            };
            if((i==0)&&(pageYOffset==x)){
                top[x].style.position = "static";
                top[x].style.top = x +"px";
            };
            i++;
        };
        if(fix){
            fix.style.position = "fixed";
            fix.style.top = 0;
            for(let x in top){
                if(top[x] !== fix){
                    top[x].style.position = "static";
                    top[x].style.top = x +"px";
                };
            };
        };
    };
};

