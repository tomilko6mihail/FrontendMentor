
function resetRadio(){
    var custom = document.getElementById('custom').value;
    if(custom > 0){     
        document.getElementById('tip-5').checked = false;
        document.getElementById('tip-10').checked = false;
        document.getElementById('tip-15').checked = false;
        document.getElementById('tip-25').checked = false;
        document.getElementById('tip-50').checked = false;
    }
}

function resetCustom(){
    document.getElementById('custom').value = "";
}

function resetIsTrue(){
    var bill = document.getElementById('bill').value;
    var peoples = document.getElementById('peoples').value;
    var resetButton = document.getElementById('resetButton');
    if(bill || peoples > 0){
        console.log('pisa');
        //resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
        resetButton.style.pointerEvents = "all";
        resetButton.className = "new-style-reset-button";
    }
    else{
        resetButton.className = "button";
        resetButton.style.pointerEvents = "none";
    }
}

var rounded = function(number){
    return +number.toFixed(2);
}

function result(){
    var radiosChecked = false;
    var radiosUnChecked = false;
    var bill = document.getElementById('bill').value;
    var peoples = document.getElementById('peoples').value;
    var custom = document.getElementById('custom').value;
    var tipAmount = document.getElementById('tipAmountSum');
    var total = document.getElementById('totalSum');
    var precent = 0;
    var radios = document.getElementsByName('radio');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            precent = radios[i].value;
            radiosChecked = true;
        }
        else{
            radiosUnChecked = true;
        }
    }
    if(!radiosChecked && radiosUnChecked){
        precent = custom/100;
    }

    if(peoples == 0 ){
        document.getElementById('peoples').style.boxShadow = "inset 0 0 0 2px hsl(0, 47%, 51%)";
        document.getElementById('errorZero').style.color = "hsl(0, 47%, 51%)";
        document.getElementById('errorZero').style.top = "0px";
    }
    else{
        document.getElementById('peoples').style.boxShadow = "none";
        document.getElementById('errorZero').style.color = "hsla(0, 47%, 51%, 0)";
        document.getElementById('errorZero').style.top = "-20px";

        

        tipAmount.innerText = "$" + rounded(bill*precent/peoples);
        total.innerText = "$" + rounded((bill/peoples) + (bill*precent/peoples));
    }

    //tip amount = bill*precent/persons 
    //total = bill/persons+tip amount
}