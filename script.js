var target_date = new Date('Jan 1, 2025 00:00:00').getTime();

function newYear() {
    var current = new Date().getTime();
    var difference = target_date - current;
    // Check if the countdown is over
    if (difference <= 0) {
        // Perform actions after the countdown is over
        document.getElementById('countdown').style.display = 'none'; // Hide the countdown
        document.getElementById('container').style.display = 'none'; // Change background
        document.getElementById('happyNewYear').style.display = 'block'; // Show the "Happy New Year!" text
        // show the button
        document.getElementById('happyNewYear_button').style.display = 'block';
        document.getElementById('happyNewYear_button_position').style.display = 'block'
        // Add more actions or code here as needed
    } else {
        // Continue with the countdown
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        // calculate
        var 天 = Math.floor(difference / day);
        var 時 = Math.floor((difference % day) / hour);
        var 分 = Math.floor((difference % hour) / minute);
        var 秒 = Math.floor((difference % minute) / second);
        // getid
        document.getElementById('day').innerText = 天;
        document.getElementById('hour').innerText = 時;
        document.getElementById('minute').innerText = 分;
        document.getElementById('second').innerText = 秒;
    }
}

// Call newYear function every second
setInterval(function () {
    newYear();
}, 1000);

//AUDIO!!!!!
const A = new Audio();
A.src = 'rick.MP3';



/*(function () {
    //time's detail
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //calculate & getid
    let newYear = 'Jan 1, 2024 00:00:00',
    countDown = new Date(newYear).getTime(),
    地 = setInterval(function() {
        let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById('day').innerText = Math.floor(distance / (day)),
        document.getElementById('hour').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minute').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('second').innerText = Math.floor((distance % (minute)) / (second))
        //after new year
        if(distance < 0) {
            
            clearInterval(地);
        }
    }, 0)
}())*/
