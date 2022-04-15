var display=document.querySelector("#input")
  var nums=document.querySelectorAll("#keyboard > div")
  for(var i=0;i<nums.length;i++){
    nums[i].addEventListener("click",myFunction)
  }

  function myFunction(){
    var targetNo=event.target.innerText
    switch(targetNo){
      case 'C':
        display.innerText="";
        break;
      case '=':
        display.innerText=eval(display.innerText);
        break;
      default:
        display.innerText+= targetNo
    }
  }