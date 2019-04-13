window.onload = function () {

  let num1 = document.querySelector('input[name=num1]');
  let num2 = document.querySelector('input[name=num2]');
  let operation = document.querySelectorAll('button');
  let res = document.querySelector('span');

  for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener('click', doOperation);

    num1.addEventListener('focus', function () {
      operation[i].disabled = false;
    });

    num2.addEventListener('focus', function () {
      operation[i].disabled = false;
    })
  }

  function doOperation() {
    let val1 = parseInt(num1.value);
    let val2 = parseInt(num2.value);

    if (this.classList.contains('plus')) {
      res.innerHTML = val1 + val2;
    } else if (this.classList.contains('min')) {
      res.innerHTML = val1 - val2;
    } else if (this.classList.contains('div')) {
      res.innerHTML = val1 / val2;
    } else  {
      res.innerHTML = val1 * val2;
    }

    this.setAttribute('disabled', 'disabled');

  }
};

