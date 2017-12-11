// var url = "https://api.nasa.gov/planetary/apod?api_key=gp1Sp3vLy0HtwvN1mkp6bfC8abfqFFbnUIRX9WOP";


document.addEventListener('DOMContentLoaded',function () {


    console.log("1");
    document.getElementById("theDate").valueAsDate = new Date();
    processDay();

    console.log("loaded.");
});

//https://api.nasa.gov/planetary/apod?date=2017-11-30&api_key=gp1Sp3vLy0HtwvN1mkp6bfC8abfqFFbnUIRX9WOP


function DarkMode(_this) {
    if (_this.checked === true){
        //DARKMODE

        document.body.style.backgroundColor= "#555555";
        document.getElementById("navbar").style.backgroundColor = "#1b1b1b";
        document.getElementById("explanation").style.color = "#333333";
        document.getElementById("title").style.color = "#fafafa";


    } else{
        //LIGHTMODE
        document.body.style.backgroundColor= "#F5F5F5";
        document.getElementById("navbar").style.backgroundColor = "#333333";
        document.getElementById("explanation").style.color = "#F5F5F5";
        document.getElementById("title").style.color = "#f5f5f5";

    }

}


function processDay(){
    var Getdate = document.getElementById("theDate").value;
    console.log("2");
    console.log(Getdate);


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //januari is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("theDate").setAttribute("max", today);

    console.log("https://api.nasa.gov/planetary/apod?date=" + Getdate + "&api_key=gp1Sp3vLy0HtwvN1mkp6bfC8abfqFFbnUIRX9WOP");

    if ( Getdate ) {
        console.log("3");
        urlJSON = "https://api.nasa.gov/planetary/apod?date=" + Getdate + "&api_key=gp1Sp3vLy0HtwvN1mkp6bfC8abfqFFbnUIRX9WOP";

        var getJSON = function (url) {
            var xhr = new XMLHttpRequest();
            console.log(url);
            xhr.open('GET',url,true);

            xhr.responseType = 'json';



            xhr.onload = function () {
                var status = xhr.status;
                if (status === 200){
                    document.getElementById("title").textContent = xhr.response.title;
                    console.log(xhr.response.title);
                    if (xhr.response.media_type === "image" ){
                        document.getElementById("picDay").src = xhr.response.url;
                        document.getElementById("explanation").textContent = xhr.response.explanation;
                        console.log(document.getElementById("picDay").source);
                        console.log(xhr.response.url);
                        console.log(status.toString());
                        document.getElementById("vidDay").style.width = "0";
                        document.getElementById("vidDay").style.height = "0";
                        document.getElementById("picDay").style.height = "60vh";
                        document.getElementById("picDay").style.width = "auto";

                    } else{
                        // document.getElementById("picDay").style.width = "0";
                        document.getElementById("picDay").style.height = "0";
                        document.getElementById("vidDay").style.height = "60vh"; //calc((100vw - 350px)*3/4)
                        document.getElementById("vidDay").style.width = "calc(60vh*4/3)";
                        document.getElementById("vidDay").src = xhr.response.url;
                        document.getElementById("explanation").textContent = xhr.response.explanation;

                    }
                }
            };
            xhr.send();
        };
        getJSON(urlJSON);

    }

}
