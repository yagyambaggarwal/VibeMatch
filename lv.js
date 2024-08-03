document.querySelector("#TEST").addEventListener("click", testfunc);

function testfunc(){
    document.getElementById("container1").style.display = "none";
    var a = Math.ceil(Math.random() * 100);

    if(a <= 15){
        var heartbrake = new Audio("audios/heartbrake.mp3");
        heartbrake.play();
        document.querySelector("#container1alternate3").style.display = "block";
    }
    else if(a > 15 && a <= 40){
        var onesided = new Audio("audios/onesided.mp3");
        onesided.play();
        document.querySelector("#container1alternate4").style.display = "block";
    }
    else if(a > 40 && a <= 70){
        var lovesong1 = new Audio("audios/love song 1.mp3");
        lovesong1.play();
        document.querySelector("#container1alternate1").style.display = "block";

    }
    else{
        var lovesong2 = new Audio("audios/lovesong2.mp3");
        lovesong2.play();
        document.querySelector("#container1alternate2").style.display = "block";
    }
    document.getElementById("TEST").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container2alternate").style.display = "block";
}
