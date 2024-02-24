const s1=document.getElementById('submit');
const p1=document.getElementById('genPass');

function generatePassword(length,lowerCase,upperCase,numbers,symbols)
{
    const lcChars='abcdefghijklmnopqrstuvwxyz';
    const ucChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nu='0123456789';
    const sy='!@#$%^&*()_+-=';

    let appchar='';
    let password='';

    appchar+=lowerCase ? lcChars : "";
    appchar+=upperCase ? ucChars : "";
    appchar+=numbers ? nu : "";
    appchar+=symbols ? sy: "";
    if(length<=0)
    {
        p1.textContent='Password length must be atleast 1';
    }
    if(appchar.length===0)
    {
        p1.textContent='Atleast 1 set of characters needs to be';
    }
    for(let i=0;i<length;i++)
    {
        const randomIndex=Math.floor(Math.random()*appchar.length);
        password+=appchar[randomIndex];
    }
    return password;
}

s1.addEventListener('click', function () {
    const len = +prompt("Enter the Length of the Password"); 
    const lowerCase = true;
    const upperCase = true;
    const numbers = true;
    const symbols = true;
    const password = generatePassword(len, lowerCase, upperCase, numbers, symbols);
    p1.textContent = password;
});