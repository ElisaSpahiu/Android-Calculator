let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        screen.innerText = '';
        break;
      case '=':
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error"
        }
        break;
      case '←':
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});