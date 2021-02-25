function clockUp(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date = today.getUTCDate();
    var month = today.getUTCMonth();
    var year = today.getFullYear();
    var day = today.getDay();

    m = checkTime(m);
    s = checkTime(s);
    month +=1;
    day = checkDay(day);

    document.getElementById('clockUp').innerHTML = 
    h + ':' + m ;
    
    document.getElementById('dateUp').innerHTML = 
    day + ', '+ date + '/' + month +'/' + year;

    var t = setTimeout(clockUp, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function checkDay(i){
    switch(i){
        case (i = 1):
        i = 'Senin';
        return i;
        case (i = 2):
        i = 'Selasa';
        return i;
        case (i = 3):
        i = 'Rabu';
        return i;
        case (i = 4):
        i = 'Kamis';
        return i;
        case (i = 5):
        i = 'Jumat';
        return i;
        case (i = 6):
        i = 'Sabtu';
        return i;
        case (i = 0):
        i = 'Minggu';
        return i;

        default:
            i = "Jalani Hari Hari mu bersama BNI";
            return i;
    }
}
