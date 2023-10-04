console.log(" utilities");


// get values from text input

function getValueById(boxId)
{
    const boxValue = document.getElementById(boxId);
  //  console.log(boxValue);
    const boxValueString = boxValue.value;
    const value = parseFloat(boxValueString);
    return value;
}
 // check it is a positive number or not
function check(num1, num2)
{
     if (num1 >= 0 && num2 >= 0) {
         return 1;
    }
    else {
        alert('please enter a positive number');
    }

}

// empty to all
function empty(box1,box2)
{
    const inputField1 = document.getElementById(box1);
    inputField1.value = '';
    const inputField2 = document.getElementById(box2);
    inputField2.value = '';
}

// set the value inside the calculation area box

function setValue(area, cnt, shape)
{
    const areaBox = document.getElementById('box-area');
    console.log(areaBox);
    const div = document.createElement('div');
    div.classList.add("d-flex", "justify-content-between", "align-items-center");

    const p1 = cnt + '.' + shape;
    console.log(p1);
    const para1 = document.createElement('p');
    para1.innerText = p1;
    div.append(para1);

    const p2 = document.createElement('p');
    p2.innerHTML = `cm<sup>2</sup>
    `
    console.log(p2);
   // div.append(p2);
    const para2 = document.createElement('p');
    para2.innerText = area +' '+ p2.innerText;
    console.log(para2);
    div.append(para2);

    const button = document.createElement('button');
    button.innerHTML = `convert to m<sup>2</sup>
    `
    button.classList.add('btn', 'btn-info', 'btn-outline-primary', 'text-white');
    div.append(button);
    areaBox.appendChild(div);
    return 0;
}

