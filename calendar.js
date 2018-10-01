
function calendarCreate(){
  var numberOfWeeks = document.getElementById("noWeeks");
  var firstDate = new Date(document.getElementById("startDate").value);
  var day = firstDate.getDay() - 1;
  var currentDate = new Date(firstDate);
  currentDate.setDate(currentDate.getDate() - Number(day));
  var checkBox = document.getElementById("weekendYes");
  var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  if(checkBox.checked == false){
    var weekLength = 5
  }else{var weekLength = 7};

  for (var a = 0; a < weekLength; a++) {
    if (a == 7) {
      document.getElementsByTagName('div')[12].appendChild(makeDivider());
    };
    document.getElementsByTagName('div')[12].appendChild(makeDayTitles(dayNames[a]));
  };

  for (var i = 0; i < numberOfWeeks.value*7; i++) {
    if (i % 7 === 0) {
      document.getElementsByTagName('div')[12].appendChild(makeDivider());
    };

    if ((i+2) % 7 === 0 && checkBox.checked == false){
      document.getElementsByTagName('div')[12].appendChild(makeDay("hello", true));
    }else if((i+1) % 7 == 0 && checkBox.checked == false){
      document.getElementsByTagName('div')[12].appendChild(makeDay("hello", true))
    }else{
    document.getElementsByTagName('div')[12].appendChild(makeDay(currentDate.toLocaleDateString('en-GB')))
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

function makeDayTitles(message) {
    var day = document.createElement('div');
    day.classList.add("dayTitles");
    day.innerHTML = message;
    return day;
}

function printCalendar(){
  var printContents = document.getElementById("calendarBox").innerHTML;
	var originalContents = document.body.innerHTML;
	document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
}
