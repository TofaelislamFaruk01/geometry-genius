
console.log('inside mouse hover');

// triangle hover mouse
document.getElementById('triColor').addEventListener('mouseenter',function(){
    randomColor('triColor');
})

// rectangle hover mouse
document.getElementById('rectangleColor').addEventListener('mouseenter',function(){
    randomColor('rectangleColor');
})

//  parallelogram hover mouse
document.getElementById('paraColor').addEventListener('mouseenter',function(){
randomColor('paraColor');
})

//  rhombus hover mouse
document.getElementById('rhombusColor').addEventListener('mouseenter',function(){
    randomColor('rhombusColor');
})

//  pentagon hover mouse
document.getElementById('penColor').addEventListener('mousemove',function(){
    randomColor('penColor');
})

//  ellipse hover mouse

// document.getElementById('ellColor').addEventListener('mouseenter',function(){
//     randomColor('ellColor');
// })

document.getElementById('ellColor').addEventListener('mouseover',function(){
    randomColor('ellColor');
})