const input = document.getElementById("input");
const result = document.getElementById("result");
input.addEventListener("change", (e) => {
  let value = Number(e.target.value);
  if (!isNaN(value)) {
    if (value < 0) {
      result.innerText = "Enter a positive number";
    } else {
        let numbers =[];
      if (value % 2 === 0) {
        
        for(let i=value+2;numbers.length < 3;i+=2){
            numbers.push(i);
            result.innerText = `The next Three even numbers are ${numbers.join(", ")}`;
        }

      } else {
        for(let i=value+2;numbers.length < 3;i+=2){
            numbers.push(i);
            result.innerText = `The next Three odd numbers are ${numbers.join(", ")}`;
        }
      }
    }
  } else {
    result.innerText = "Enter a number";
  }
});
