(function () {

    var timeFlag = false;
    var user = getUser();
    setInterval(displayTime, 1000);

    function displayTime() {
        var date = new Date();
        var halfFormat = formatAMPM(date);
        var fullFormat = formatMilitary(date);
        var time = timeFlag ? fullFormat : halfFormat;
        var monthDisplay = date.getDate() + ' ' + getMonthName(date) ;
        var greeting;
        var hours = date.getHours();
        if(hours < 12 && hours > 5){greeting = "Good Morning"}
        if(hours >= 12 && hours < 18){greeting = "Good Afternoon"}
        if(hours >= 18){greeting = "Good Evening"}

        $('#greeting').html(greeting + `, ${user}`)
        $('#clock').html(time);
        $('#date').html(monthDisplay)
    }

    function getMonthName(date) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getMonth()];
    }

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var strTime = hours + ':' + minutes + ':' + seconds;
        return strTime;
    }

    function formatMilitary(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var strTime = hours + ':' + minutes + ':' + seconds;
        return strTime;
    }

    function getUser(){
        var user = localStorage.getItem("inspireUser");
        if(user){
            return JSON.parse(user).name;
        }
        else{
            var username = window.prompt("Please enter you name:", "username");
            var newUser = {"name": username};
            localStorage.setItem("inspireUser", JSON.stringify(newUser));
        }
    }

    $('#clock').on('click', function(){
        timeFlag = !timeFlag;
    })

} ())
