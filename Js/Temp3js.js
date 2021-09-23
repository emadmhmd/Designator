/* js *********************************************************/

var up =document.getElementById('up'),
    he =document.getElementById('header');
setInterval(function(){
    if(scrollY > 150){
        up.classList.remove('hidden');
    }
    if(scrollY <= 150){
        up.classList.add('hidden');
    } 
},1)
// up botton to scroll to top
/*up.onclick=function(){
    scrollTo(0,0);
};*/
/* start Of Menu */

var menu =document.getElementById('menu'),
    slide =document.getElementById('slide-menu'),
    close =document.getElementById('close');
menu.onclick = function(){
    'use strict';

    slide.classList.remove('hidden');
    menu.classList.add('hidden');
}

close.onclick = function(){
    'use strict';

    menu.classList.remove('hidden');
    slide.classList.add('hidden');
}

menu.onclick = function(){
    'use strict';
    
    menu.classList.add('hidden');
}

/*
function placeholder_focus(){
    'use strict';
    this.setAttribute('new_placeholder' , this.getAttribute('placeholder'));
    this.setAttribute('placeholder' , ' ');
}

function placeholder_blur(){
    'use strict';
    this.setAttribute('placeholder' , this.getAttribute('new_placeholder'));
    this.setAttribute('new_placeholder' ,'' );
}
*/
var text1 = document.getElementById('in1');
var text2 = document.getElementById('in2');
var text3 = document.getElementById('in3');
var text4 = document.getElementById('in4');
text1.onfocus =function(){
    'use strict';
    this.setAttribute('main-placeholder' , this.getAttribute('placeholder'));
    this.setAttribute('placeholder' , ' ');
}

text1.onblur  = function(){
    'use strict';
    this.setAttribute('placeholder' , this.getAttribute('main-placeholder'));
    this.setAttribute('main-placeholder' ,'' );
}

text2.onfocus =function(){
    'use strict';
    this.setAttribute('main-placeholder' , this.getAttribute('placeholder'));
    this.setAttribute('placeholder' , ' ');
}

text2.onblur  = function(){
    'use strict';
    this.setAttribute('placeholder' , this.getAttribute('main-placeholder'));
    this.setAttribute('main-placeholder' ,'' );
}


text3.onfocus =function(){
    'use strict';
    this.setAttribute('main-placeholder' , this.getAttribute('placeholder'));
    this.setAttribute('placeholder' , ' ');
}

text3.onblur  = function(){
    'use strict';
    this.setAttribute('placeholder' , this.getAttribute('main-placeholder'));
    this.setAttribute('main-placeholder' ,'' );
}
text4.onfocus =function(){
    'use strict';
    this.setAttribute('main-placeholder' , this.getAttribute('placeholder'));
    this.setAttribute('placeholder' , ' ');
}

text4.onblur  = function(){
    'use strict';
    this.setAttribute('placeholder' , this.getAttribute('main-placeholder'));
    this.setAttribute('main-placeholder' ,'' );
}

