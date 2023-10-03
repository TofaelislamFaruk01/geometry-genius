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
// set value by id

function setValueById(boxid , value)
{
    const areaBoxId = document.getElementById(boxid);
    areaBoxId.innerText = value;
}

// set the value inside the area

function setValue(area, cnt, shape)
{
    const areaBox = document.getElementById('box-area');
    console.log(areaBox);
    const section = document.createElement('div');
    section.innerHTML = `
    
     <p> <span id="cnt">1</span>.<span id="shape">shape</span> </p>
     <p><span id="area">1200.98</span>cm<sup>2</sup> </p>
    <button class="btn btn-primary area-btn" type="submit">convert to m<sup>2</sup> </button>
    
    `
    areaBox.appendChild(section);
   
    section.classList.add("d-flex", "justify-content-between", "align-items-center");

    setValueById('cnt', cnt);
    setValueById('shape', shape);
    setValueById('area', area);
    return 0;
}

// empty to all
function empty(box1,box2)
{
    const inputField1 = document.getElementById(box1);
    inputField1.value = '';
    const inputField2 = document.getElementById(box2);
    inputField2.value = '';
}


