var dayarray;
var montharray;
var date;
var currentDate;
var today;
var btn = document.getElementById('btn');
var table = document.getElementById('crtable');
var data = [];
var tempdata = [];
var n = 1;
var profit;
const fetchdata = document.getElementsByClassName('fetch');
// console.log(fetchdata.length);
btn.addEventListener('click', (e) => {
    var sold = document.getElementById('sold').value | 0
    e.preventDefault()
    date = document.getElementById('date').value;
    if (date == "" || fetchdata[4].value == "") {
        alert("date and time cant be empty");

    }
    currentDate = new Date(date);
    today = new Date();
    if (currentDate > today) {
        alert("Invalid Date");
    }
    else {
        dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
        monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
        var day = currentDate.getDay();
        day = dayArray[day];
        var month = currentDate.getMonth();
        month = monthArray[month];
        var dat = currentDate.getDate();
        var year = currentDate.getFullYear();
    }
    if (sold == 0) {
        alert("product cant be zero")
    }
    for (let i = 0; i < fetchdata.length; i++) {
        data[i] = fetchdata[i].value;
    }

    var time = data[4];
    tempdata[0] = `${day} ${month} ${dat} ${year} ${time}`;
    tempdata[1] = data[0];
    tempdata[2] = data[1];
    tempdata[3] = data[2];
    tempdata[4] = tempdata[2] * tempdata[3];
    if (profit == null) {
        alert("please select the item");
        location.reload();
    }
    if (profit.value == 'Monitor') {
        //  console.log(val.value);
        tempdata[5] = tempdata[4] - 5550 * data[2];;
    }
    else if (profit.value == 'Mother Board') {
        tempdata[5] = tempdata[4] - 8000 * data[2];
    }
    else if (profit.value == "Mouse") {
        tempdata[5] = tempdata[4] - 60 * data[2];
    }
    else if (profit.value == "Hard Disk") {
        tempdata[5] = tempdata[4] - 8000 * data[2];
    }
    else if (profit.value == "Graphic Card") {
        tempdata[5] = tempdata[4] - 7000 * data[2];
    }
    else if (profit.value == "Ram") {
        tempdata[5] = tempdata[4] - 2000 * data[2];
    }
    // console.log(tempdata);
     if (sold != 0 && currentDate < today ) {
    dataedit();
    }
})
function dataedit() {
    var table = document.getElementById("crtable");
    var newrow = table.insertRow(n);
    var sr = newrow.insertCell(0);
    sr.innerHTML = n;
    sr.style.fontWeight = "bold";
    n = n + 1;

    for (let i = 0; i < tempdata.length; i++) {

        newrow.insertCell(i + 1).innerHTML = tempdata[i];

    }
}

function product(val) {
    profit = val;
    document.getElementById("price").setAttribute("style", "background-color:lightgrey; border-radius: 3px; ")
    //console.log(val.value);
    if (val.value == 'Monitor') {
        //  console.log(val.value);
        document.getElementById('price').value = '8500';
    }
    else if (val.value == 'Mother Board') {
        document.getElementById('price').value = '10000';
    }
    else if (val.value == "Mouse") {
        document.getElementById('price').value = '100';
    }
    else if (val.value == "Hard Disk") {
        document.getElementById('price').value = '15000';
    }
    else if (val.value == "Graphic Card") {
        document.getElementById('price').value = '10000';
    }
    else if (val.value == "Ram") {
        document.getElementById('price').value = '4000';
    }
}
