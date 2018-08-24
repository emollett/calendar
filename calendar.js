  function hide(){
    var checkBox = document.getElementById("weekendYes");

    if (checkBox.checked == true){
      saturday.style.visibility="hidden";
      sunday.style.visibility="hidden";
      }else{
      saturday.style.visibility="visible";
      sunday.style.visibility="visible";
      }
    }
