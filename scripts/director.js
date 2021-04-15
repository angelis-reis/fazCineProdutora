var play = document.getElementById("abismo");

var playFilm = document.getElementById("abismo-player");

var play2 = document.getElementById("requiem");

var play2Film = document.getElementById("requiem-player");

var play3 = document.getElementById("historias");

var play3Film = document.getElementById("historias-player");

var play4 = document.getElementById("zelito");

var play4Film = document.getElementById("zelito-player");

var play5 = document.getElementById("food");

var play5Film = document.getElementById("food-player");

var off = document.getElementsByTagName("BODY")[0];

let count=0;

let count2=0;

let count3=0;

let count4=0;

let count5=0;

play.addEventListener("click",

    function(){

        play.style.display = "none";

        playFilm.style.display= "inherit"

        console.log("clickLink");

        count=0;

        console.log(count);
    }
)

off.addEventListener("click",

                function(){                    

                    count=count+1;
                    console.log("clickBody");
                    console.log(count);

                    if (count==2){

                        if (playFilm.style.display == "inherit"){

                            playFilm.style.display = "none";

                            play.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=playFilm.getAttribute('src');

                            playFilm.setAttribute('src', '');

                            playFilm.setAttribute('src', videoSource);
                        }

                        count=0;
                    }
                }
)

play2.addEventListener("click",

    function(){

        play2.style.display = "none";

        play2Film.style.display= "inherit"

        console.log("click2Link");

        count2=0;

        console.log(count2);
    }
)

off.addEventListener("click",

                function(){

                    count2=count2+1;
                    console.log("click2Body");
                    console.log(count2);

                    if (count2==2){

                        if (play2Film.style.display == "inherit"){

                            play2Film.style.display = "none";

                            play2.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play2Film.getAttribute('src');

                            play2Film.setAttribute('src', '');

                            play2Film.setAttribute('src', videoSource);
                        }

                        count2=0;
                    }
                }
)

play3.addEventListener("click",

    function(){

        play3.style.display = "none";

        play3Film.style.display= "inherit"

        console.log("clickLink");

        count3=0;

        console.log(count);
    }
)

off.addEventListener("click",

                function(){

                    count3=count3+1;
                    console.log("clickBody");
                    console.log(count3);

                    if (count3==2){

                        if (play3Film.style.display == "inherit"){

                            play3Film.style.display = "none";

                            play3.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play3Film.getAttribute('src');

                            play3Film.setAttribute('src', '');

                            play3Film.setAttribute('src', videoSource);
                        }

                        count3=0;
                    }
                }
)

play4.addEventListener("click",

    function(){

        play4.style.display = "none";

        play4Film.style.display= "inherit"

        console.log("clickLink");

        count4=0;

        console.log(count4);
    }
)

off.addEventListener("click",

                function(){

                    count4=count4+1;
                    console.log("clickBody");
                    console.log(count4);

                    if (count4==2){

                        if (play4Film.style.display == "inherit"){

                            play4Film.style.display = "none";

                            play4.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play4Film.getAttribute('src');

                            play4Film.setAttribute('src', '');

                            play4Film.setAttribute('src', videoSource);
                        }

                        count4=0;
                    }
                }
)

play5.addEventListener("click",

    function(){

        play5.style.display = "none";

        play5Film.style.display= "inherit"

        console.log("clickLink");

        count5=0;

        console.log(count5);
    }
)

off.addEventListener("click",

                function(){

                    count5=count5+1;
                    console.log("clickBody");
                    console.log(count5);

                    if (count5==2){

                        if (play5Film.style.display == "inherit"){

                            play5Film.style.display = "none";

                            play5.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play5Film.getAttribute('src');

                            play5Film.setAttribute('src', '');

                            play5Film.setAttribute('src', videoSource);
                        }

                        count5=0;
                    }
                }
)