let input = document.querySelector('input');

// Run inWords() when Enter key is pressed
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') inWords();
});
// EXPLANATION:=
// Jab user input box me koi key dabata hai, browser ek event object banata hai.
// Hum check karte hain agar event.key ka naam "Enter" hai,
// toh inWords() function chala do — warna kuch mat karo.

function inWords() {
let num = input.value;
let h1 = document.querySelector('.output');
    
  if (num <= 0 || num > 100000) return h1.innerText = "Invalid Number";

  let arr = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
  let arr2 = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"];

  function numLessThan100(numm) {
    return (numm >= 11 && numm <= 19) ? arr[numm] : arr2[Math.floor(numm / 10)] + " " + arr[Math.floor(numm % 10)];
  }

  function numLessThanThousand(numm) {
    return arr[Math.floor(numm / 100)] + " Hundred " + numLessThan100(numm % 100);
  }

  function numLessThanTenThousand(numm) {
    let thousandVal = ((numm % 1000) < 100) ? numLessThan100(numm % 1000) : numLessThanThousand(numm % 1000);
    return arr[Math.floor(numm / 1000)] + " Thousand " + thousandVal;
  }

  if(num < 20) return h1.innerText = arr[num]; 
  
  if (num <= 100) return h1.innerText = numLessThan100(num);
  
  if (num < 1000) return h1.innerText = numLessThanThousand(num);
  
  if(num <= 20000) return h1.innerText = numLessThanTenThousand(num);
  
  if(num < 100000) return h1.innerText = numLessThan100(num / 1000) + " Thousand " + numLessThanThousand(num % 1000);

  if(num == 100000) return h1.innerText = "One Lakh";
}