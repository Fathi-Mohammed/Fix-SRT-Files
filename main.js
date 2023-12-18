function removeDuplicateNumbersAndFormatSRT(text) {
  let lines = text.split('\n');
  let uniqueNumbers = new Set(lines);
  let resultText = '';

    uniqueNumbers.forEach((ele)=>{
      let match = ele.match(/^\d+$/);
      if (match) {
        resultText += ele + '\n';
      } else {
        
        if(ele.split(' ').includes('-->')) {
          resultText += ele + "\n"  
        } else {
          resultText += ele + "\n\n"
        }
      }
  })

  document.querySelector('.parag').value =  resultText.trim()

  return resultText.trim();
}


let inputText = document.querySelector('textarea');
let button = document.getElementById('submit');

button.addEventListener('click',()=>{
  let processedText = removeDuplicateNumbersAndFormatSRT(inputText.value);
  console.log(processedText)
})

let copyButton = document.getElementById('submit');
copyButton.addEventListener('click',()=>{
  let copiedText = document.querySelector('.parag').value
  navigator.clipboard.writeText(copiedText)
})