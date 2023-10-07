console.log("calc");
let cnt = 0;
// blog button

document.getElementById('blog-btn').addEventListener('click',function(){

     window.location.href='http://127.0.0.1:5500/html/blog.html';
    console.log(34972);
})

// triangle button

document.getElementById('calcT').addEventListener('click', function () {
    
    const baseT = getValueById('baseT');
    console.log(baseT);
    const heightT = getValueById('heightT');
    console.log(heightT);
    const flag= check(baseT, heightT);
    if (flag ===1) {
        let area = 0.5 * baseT * heightT;
        area = area.toFixed(2);
        cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Triangle');
        
    }
    empty('baseT','heightT');
   // var p=randomColor('triColor');
})

// rectangle button

document.getElementById('rectangle-btn').addEventListener('click', function () {
    
    const num1 = getValueById('num1');
    console.log(num1);
    const num2 = getValueById('num2');
    console.log(num2);
    const flag= check(num1, num2);
    if (flag === 1) {
        let area = num1 * num2;
        area = area.toFixed(2);
        cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Rectangle');
       
    }
     empty('num1','num2');
})

// parallelogram button
document.getElementById('para-btn').addEventListener('click', function () {
    
    const num1 = getValueById('baseP');
    console.log(num1);
    const num2 = getValueById('heightP');
    console.log(num2);
    const flag= check(num1, num2);
    if (flag === 1) {
        let area = num1 * num2;
        area = area.toFixed(2);
        cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Parallelogram');
        
    }
    empty('baseP','heightP');
})
// rhombos button
document.getElementById('rhombus-btn').addEventListener('click', function () {
    
    const num1 = getValueById('d1R');
    console.log(num1);
    const num2 = getValueById('d2R');
    console.log(num2);
    const flag= check(num1, num2);
    if (flag === 1) {
        let area = 0.5 * num1 * num2;
        area = area.toFixed(2);
       cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Rhombus');
       
    }
     empty('d1R','d2R');
})
// pentagon button
document.getElementById('pentagon-btn').addEventListener('click', function () {
    
     const num1 = getValueById('pen1');
    console.log(num1);
     const num2 = getValueById('pen2');
     console.log(num2);
   
    const flag= check(num1, num2);
    if (flag === 1) {
        let area = 0.5 * num1 * num2;
        area = area.toFixed(2);
         cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Pentagon');
        
    }
    empty('pen1','pen2');
})
// ellipse button
document.getElementById('ellipse-btn').addEventListener('click', function () {
    
    const num1 = getValueById('ell1');
    console.log(num1);
    const num2 = getValueById('ell2');
    console.log(num2);
    const flag= check(num1, num2);
    if (flag === 1) {
        let area = 3.1416 * num1 * num2;
        area = area.toFixed(2);
         cnt++;
        console.log(area, cnt);
        setValue(area, cnt, 'Ellipse');
        
    }
    empty('ell1','ell2');
})
