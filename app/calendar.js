
function calendarCreate(){
  var numberOfWeeks = document.getElementById("noWeeks");
  var firstDate = new Date(document.getElementById("startDate").value);
  var day = firstDate.getDay() - 1;
  var currentDate = new Date(firstDate);
  currentDate.setDate(currentDate.getDate() - Number(day));
  var checkBox = document.getElementById("weekendYes");

  for (var i = 0; i < numberOfWeeks.value*7; i++) {
    if (i % 7 === 0) {
      document.getElementsByTagName('body')[0].appendChild(makeDivider());
    };

    if ((i+2) % 7 === 0 && checkBox.checked == false){
      document.getElementsByTagName('body')[0].appendChild(makeDay("hello", true));
    }else if((i+1) % 7 == 0 && checkBox.checked == false){
      document.getElementsByTagName('body')[0].appendChild(makeDay("hello", true))
    }else{
    document.getElementsByTagName('body')[0].appendChild(makeDay(currentDate.toLocaleDateString('en-GB')))
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function makeDay(message, isHidden) {
    var day = document.createElement('div');
    day.classList.add("day");
    day.innerHTML = message;
    if (isHidden) {
      day.classList.add("hidden");
    }
    return day;
}

function makeDivider() {
    var day = document.createElement('div');
    day.classList.add("divider");
    return day;
}
