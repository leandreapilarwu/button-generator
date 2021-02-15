let myButton = document.querySelector('button');

let myInputs = document.querySelectorAll('input');

for (let input of myInputs) {
  input.addEventListener('input', () => {
    let inputValue = input.id;
    (inputValue === 'btn-font-size') ?
        myButton.style.fontSize = `${input.value}rem`:

      (inputValue === 'btn-bradius') ?
        myButton.style.borderRadius = `${input.value}rem`:
      
      (inputValue === 'btn-width') ?
        myButton.style.width = `${input.value}rem`:

      (inputValue === 'btn-height') ?
        myButton.style.height = `${input.value}rem`:

      (inputValue === 'btn-text-color') ?
        myButton.style.color = `${input.value}`:

      (inputValue === 'bg-color') ?
        myButton.style.background = `${input.value}`:

      (inputValue === 'btn-vertical') ?
        console.log(input.value):
      (inputValue === 'btn-horizontal') ?
        console.log(input.value):
      (inputValue === 'btn-blur')?
        console.log(input.value):
        console.log(input.id);

    document.querySelector('#btn-style').innerText = myButton.getAttribute(
      'style'
      );
    }
  );
}
