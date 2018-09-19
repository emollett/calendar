function hide(){
  var checkBox = document.getElementById("weekendYes");

  if (checkBox.checked == false){
    saturday.style.visibility="hidden";
    sunday.style.visibility="hidden";
    }else{
    saturday.style.visibility="visible";
    sunday.style.visibility="visible";
    }
  }

function calendarCreate(){
  var numberOfWeeks = document.getElementById("noWeeks");
  var firstDate = new Date(document.getElementById("startDate").value);
  var currentDate = new Date(firstDate);

  function makeDay(message) {
      var day = document.createElement('div');
      day.classList.add("day");
      day.innerHTML = message;
      return day;
  }

  function makeDivider() {
      var day = document.createElement('div');
      day.classList.add("divider");
      return day;
  }

  for (var i = 0; i < numberOfWeeks.value*7; i++) {
    if (i % 7 === 0) {
      document.getElementsByTagName('body')[0].appendChild(makeDivider())
    }
    currentDate.setDate(firstDate.getDate() + i);
    document.getElementsByTagName('body')[0].appendChild(makeDay(currentDate.toLocaleDateString('en-GB')))
  }
}
