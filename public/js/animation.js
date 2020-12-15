nonce="uG2bsk6JIH923nsvp01n24KE";
var counter =2; 
  setInterval(
    function(){
      document.getElementById('radio' +counter).checked = true;
      counter++;
      if(counter>3)
        {
          counter =1;
        }
  },
  5000);




  function loader() {
    var overlay = document.querySelector('.spinner');
    //overlay.setAttribute("display","block");
    console.log(overlay);
    
  }
  