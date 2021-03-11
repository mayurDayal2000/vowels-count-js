/* previous code

function vowelsCounter(strInput){
    let counter = 0;
    vowels ="aeiou";
    for(let i=0;i<=strInput.length;i++){
      if(vowels.includes(strInput[i])){
        counter ++;
      }
    }
    return counter;
  }
  console.log(vowelsCounter("rohan singh"))
*/

const vowelsCounter = (strInput) => {
  let counter = 0;
  let vowels = "aeiou";

  for (let i = 0; i <= strInput.length; i++) {
    if (vowels.includes(strInput[i])) {
      counter++;
    }
  }
  return counter;
};

const form = document.querySelector("form");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputText = form.vowel.value;
  let vowelCheck = vowelsCounter(inputText);
  let template = `<p>Total vowel in the word <strong>${inputText}</strong> : ${vowelCheck}`;
  msg.innerHTML = template;

  form.reset();
});