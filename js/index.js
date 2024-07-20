
let toggler = document.querySelector('.toggler');
let spans = document.querySelectorAll('.toggler span');
let ball = document.querySelector('.ball');

let buttons = document.querySelectorAll('.btn.input');
let input = document.querySelector('input');
let reset =document.querySelector('.btn.reset');
let del = document.querySelector('.btn.del');
function setBodyTheme(theme){
    document.body.className = theme;    
}

spans.forEach((span,index)=>{
    span.addEventListener('click',()=>{
        console.log("Move the ball to span index",index);
        let left = spans[index].getBoundingClientRect().left - toggler.getBoundingClientRect().left;
        console.log(left);
        ball.style.left = left + 'px';
        console.log(ball.style.left);

        setBodyTheme(span.getAttribute('theme'));
    })    
});

reset.addEventListener('click',()=>{
    input.value = '';
});
del.addEventListener('click',()=>{
    input.value = input.value.slice(0,input.value.length - 1);
})
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        input.value += btn.innerText;
    })
})