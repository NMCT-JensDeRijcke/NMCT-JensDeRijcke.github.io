// var url = "https://api.nasa.gov/planetary/apod?api_key=gp1Sp3vLy0HtwvN1mkp6bfC8abfqFFbnUIRX9WOP";

// var obj = JSON.parse(decodeURI(url));


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
    // document.getElementById("contact").onclick(processDay());

    // var today = new Date();
    // var vandaag = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    // document.getElementById("theDate").max= vandaag;
    // console.log(vandaag);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //Januari is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("theDate").setAttribute("max", today);

    // var partsDate = Getdate.split("-");
    //
    // // var firstChar = partsDate[2].toString().charAt(0);
    // // console.log(firstChar);
    // // if (firstChar === "0"){
    // //     partsDate[2] = partsDate[2].substr(1);
    // // }
    // // console.log(partsDate[2]);
    // // console.log(partsDate[2]);
    // // console.log(partsDate[2]);
    // // console.log(partsDate[2]);
    // // console.log(partsDate[2]);
    // // if (partsDate[0].toString().charAt(0) == "0"){
    // //
    // // }
    //
    // var lengte = today.getDate().toString().length;
    // if (lengte !== 2){
    //     partsDate[2] =  partsDate[2].substr(1);
    // }
    // console.log(partsDate[0] + "=" + today.getFullYear());
    // console.log(partsDate[1] + "=" + (today.getMonth()+1));
    // console.log(partsDate[2] + "=" + today.getDate());
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

                        // document.getElementById("picDay").src = "/assets/no_photo_today.jpg"
                    }


                }
            };
            xhr.send();
        };
        getJSON(urlJSON);

    }

}
