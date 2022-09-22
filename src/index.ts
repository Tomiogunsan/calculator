

let  display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('button'))
 

buttons.map(button => {
  button.addEventListener('click', (e) =>{
    console.log('click')
    switch((e.target as HTMLButtonElement).innerText){
      case 'AC':
        display!.innerText = ''
     
        break;
        case '=':
          if(display)
        display!.innerText = eval(display.innerText);
          break;
          case 'DEL':
            if(display){
              display!.innerText = display!.innerText.slice(0, -1);
            }
            break;
        default:
          display!.innerText += ((e.target as HTMLButtonElement).innerText)
    
      
 } })
})