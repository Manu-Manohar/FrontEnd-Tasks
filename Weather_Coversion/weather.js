
const data=document.getElementById('data');
const cel=document.getElementById('celsius');
const fahren=document.getElementById('fahrenheit');
const res=document.getElementById('result');

let temp;
function convert()
{
    if(fahren.checked)
    {
        temp=Number(data.value);
        temp=temp*9/5+32;
        res.textContent=temp.toFixed(1)+"°F";
    }
    else if(cel.checked)
    {
        temp=Number(data.value);
        temp=(temp-32)*(5/9);
        res.textContent=temp.toFixed(1)+"°C";
    }
    else{
        res.textContent="Select one of option!";
    }
}