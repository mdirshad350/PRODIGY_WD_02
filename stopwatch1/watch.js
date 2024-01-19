const timer = document.querySelector("#stopwatch");
    var  lap = document.querySelector(".lap-x")
        var hr = 0
        var min = 0;
        var sec = 0
        var stoptime = true;

        function startTimer(){
            if(stoptime==true){
                stoptime = false;
                timerCycle();
            }
        }
        function stopTimer(){
            if(stoptime==false){
                stoptime = true;
            }

        }
        function timerCycle(){

            if(stoptime==false){

                sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec+1;

            if(sec==60){
                min = min+1;
                sec = 0;
            }
            if(min==60){
                hr = hr+1;
                min=0;
                sec = 0;

            }
            if(sec<10){
                sec = "0"+sec;
            }
            if(min<10){
                min = "0"+min;
            }
            if(hr<10){
                hr = "0"+hr;

            }

            timer.innerHTML = hr+ ":"+ min+ ":" +sec;
            setTimeout("timerCycle()",1000);

            }
          
        }
        function getTimer(){
            return (hr)+":" +(min)+":" +(sec)
        }

        function resetTImer(){
            timer.innerHTML ="00:00:00"
            stopTime= true;
            hr = 0;
            sec = 0;
            min = 0;
        }
        function lapTimer(){
        if(stoptime==false){
            
            var li = document.createElement("li");
                li.innerHTML =getTimer();
                lap.appendChild(li);
         
        }
       

        }
        function resetLap(){
            lap.innerHTML = "";
            stoptime = true;
            timer.innerHTML ="00:00:00"
            hr = 0;
            sec = 0;
            min = 0;

        }
