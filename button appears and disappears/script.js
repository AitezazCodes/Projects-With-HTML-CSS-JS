// let btn = document.getElementById('button');
// let btn2 = document.getElementById('button2');
// let tex = document.getElementById('text');

// btn.addEventListener('click', function(){
//     tex.style.display = 'block';
// });

// btn2.addEventListener('click', function(){
//     tex.style.display = 'none';
// });


let btn = document.getElementById('button');
let tex = document.getElementById('text');

let appear = 1;

btn.addEventListener('click', function() {
    if (appear === 1) {
        tex.style.display = 'none';
        appear = 0;
    } else {
        tex.style.display = 'block';
        appear = 1;
    }
});

