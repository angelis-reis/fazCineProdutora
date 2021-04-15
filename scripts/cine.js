var play0 = document.getElementById("depois");

var play0Film = document.getElementById("depois-player");

var play1 = document.getElementById("abismo");

var play1Film = document.getElementById("abismo-player");

var play2 = document.getElementById("historias");

var play2Film = document.getElementById("historias-player");

var play3 = document.getElementById("niteroi");

var play3Film = document.getElementById("niteroi-player");

var play4 = document.getElementById("zelito");

var play4Film = document.getElementById("zelito-player");

var play5 = document.getElementById("universidade");

var play5Film = document.getElementById("universidade-player");

var play6 = document.getElementById("kangaroo");

var play6Film = document.getElementById("kangaroo-player");

var play7 = document.getElementById("cultura2");

var play7Film = document.getElementById("cultura2-player");

var play8 = document.getElementById("o-que-e");

var play8Film = document.getElementById("o-que-e-player");

var play9 = document.getElementById("afinando");

var play9Film = document.getElementById("afinando-player");

var play10 = document.getElementById("trilha");

var play10Film = document.getElementById("trilha-player");

// var play11 = document.getElementById("era");

// var play11Film = document.getElementById("era-player");

// var play12 = document.getElementById("o-que-vou2");

// var play12Film = document.getElementById("o-que-vou2-player");

// var play13 = document.getElementById("tear");

// var play13Film = document.getElementById("tear-player");

// var play14 = document.getElementById("kangaroo");

// var play14Film = document.getElementById("kangaroo-player");

// var play15 = document.getElementById("historias");

// var play15Film = document.getElementById("historias-player");

// var play16 = document.getElementById("referencia");

// var play16Film = document.getElementById("referencia-player");

// var play17 = document.getElementById("olho");

// var play17Film = document.getElementById("olho-player");

var off = document.getElementsByTagName("BODY")[0];

let count0=0;

let count1=0;

let count2=0;

let count3=0;

let count4=0;

let count5=0;

let count6=0;

let count7=0;

let count8=0;

let count9=0;

let count10=0;

// let count11=0;

// let count12=0;

// let count13=0;

// let count14=0;

// let count15=0;

// let count16=0;

// let count17=0;

play0.addEventListener("click",

    function(){

        play0.style.display = "none";

        play0Film.style.display= "inherit"

        console.log("clickLink");

        count0=0;

        console.log(count0);
    }
)

off.addEventListener("click",

                function(){                    

                    count0=count0+1;
                    console.log("clickBody");
                    console.log(count0);

                    if (count0==2){

                        if (play0Film.style.display == "inherit"){

                            play0Film.style.display = "none";

                            play0.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play0Film.getAttribute('src');

                            play0Film.setAttribute('src', '');

                            play0Film.setAttribute('src', videoSource);
                        }

                        count0=0;
                    }
                }
)

play1.addEventListener("click",

    function(){

        play1.style.display = "none";

        play1Film.style.display= "inherit"

        console.log("clickLink");

        count1=0;

        console.log(count1);
    }
)

off.addEventListener("click",

                function(){                    

                    count1=count1+1;
                    console.log("clickBody");
                    console.log(count1);

                    if (count1==2){

                        if (play1Film.style.display == "inherit"){

                            play1Film.style.display = "none";

                            play1.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play1Film.getAttribute('src');

                            play1Film.setAttribute('src', '');

                            play1Film.setAttribute('src', videoSource);
                        }

                        count1=0;
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

play6.addEventListener("click",

    function(){

        play6.style.display = "none";

        play6Film.style.display= "inherit"

        console.log("clickLink");

        count6=0;

        console.log(count);
    }
)

off.addEventListener("click",

                function(){                    

                    count6=count6+1;
                    console.log("clickBody");
                    console.log(count6);

                    if (count6==2){

                        if (play6Film.style.display == "inherit"){

                            play6Film.style.display = "none";

                            play6.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play6Film.getAttribute('src');

                            play6Film.setAttribute('src', '');

                            play6Film.setAttribute('src', videoSource);
                        }

                        count6=0;
                    }
                }
)

play7.addEventListener("click",

    function(){

        play7.style.display = "none";

        play7Film.style.display= "inherit"

        console.log("clickLink");

        count7=0;

        console.log(count7);
    }
)

off.addEventListener("click",

                function(){                    

                    count7=count7+1;
                    console.log("clickBody");
                    console.log(count7);

                    if (count7==2){

                        if (play7Film.style.display == "inherit"){

                            play7Film.style.display = "none";

                            play7.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play7Film.getAttribute('src');

                            play7Film.setAttribute('src', '');

                            play7Film.setAttribute('src', videoSource);
                        }

                        count7=0;
                    }
                }
)

play8.addEventListener("click",

    function(){

        play8.style.display = "none";

        play8Film.style.display= "inherit"

        console.log("clickLink");

        count8=0;

        console.log(count8);
    }
)

off.addEventListener("click",

                function(){                    

                    count8=count8+1;
                    console.log("clickBody");
                    console.log(count8);

                    if (count8==2){

                        if (play8Film.style.display == "inherit"){

                            play8Film.style.display = "none";

                            play8.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play8Film.getAttribute('src');

                            play8Film.setAttribute('src', '');

                            play8Film.setAttribute('src', videoSource);
                        }

                        count8=0;
                    }
                }
)

play9.addEventListener("click",

    function(){

        play9.style.display = "none";

        play9Film.style.display= "inherit"

        console.log("clickLink");

        count9=0;

        console.log(count9);
    }
)

off.addEventListener("click",

                function(){                    

                    count9=count9+1;
                    console.log("clickBody");
                    console.log(count9);

                    if (count9==2){

                        if (play9Film.style.display == "inherit"){

                            play9Film.style.display = "none";

                            play9.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play9Film.getAttribute('src');

                            play9Film.setAttribute('src', '');

                            play9Film.setAttribute('src', videoSource);
                        }

                        count9=0;
                    }
                }
)

play10.addEventListener("click",

    function(){

        play10.style.display = "none";

        play10Film.style.display= "inherit"

        console.log("clickLink");

        count10=0;

        console.log(count10);
    }
)

off.addEventListener("click",

                function(){                    

                    count10=count10+1;
                    console.log("clickBody");
                    console.log(count10);

                    if (count10==2){

                        if (play10Film.style.display == "inherit"){

                            play10Film.style.display = "none";

                            play10.style.display = "inherit";

                            // turn off video after display:none;

                            var videoSource=play10Film.getAttribute('src');

                            play10Film.setAttribute('src', '');

                            play10Film.setAttribute('src', videoSource);
                        }

                        count10=0;
                    }
                }
)

play11.addEventListener("click",

    function(){

        play11.style.display = "none";

        play11Film.style.display= "inherit"

        console.log("clickLink");

        count11=0;

        console.log(count11);
    }
)




// off.addEventListener("click",

//                 function(){                    

//                     count11=count11+1;
//                     console.log("clickBody");
//                     console.log(count11);

//                     if (count11==2){

//                         if (play11Film.style.display == "inherit"){

//                             play11Film.style.display = "none";

//                             play11.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play11Film.getAttribute('src');

//                             play11Film.setAttribute('src', '');

//                             play11Film.setAttribute('src', videoSource);
//                         }

//                         count11=0;
//                     }
//                 }
// )

// play12.addEventListener("click",

//     function(){

//         play12.style.display = "none";

//         play12Film.style.display= "inherit"

//         console.log("clickLink");

//         count12=0;

//         console.log(count12);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count12=count12+1;
//                     console.log("clickBody");
//                     console.log(count12);

//                     if (count12==2){

//                         if (play12Film.style.display == "inherit"){

//                             play12Film.style.display = "none";

//                             play12.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play12Film.getAttribute('src');

//                             play12Film.setAttribute('src', '');

//                             play12Film.setAttribute('src', videoSource);
//                         }

//                         count12=0;
//                     }
//                 }
// )

// play13.addEventListener("click",

//     function(){

//         play13.style.display = "none";

//         play13Film.style.display= "inherit"

//         console.log("clickLink");

//         count13=0;

//         console.log(count13);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count13=count13+1;
//                     console.log("clickBody");
//                     console.log(count13);

//                     if (count13==2){

//                         if (play13Film.style.display == "inherit"){

//                             play13Film.style.display = "none";

//                             play13.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play13Film.getAttribute('src');

//                             play13Film.setAttribute('src', '');

//                             play13Film.setAttribute('src', videoSource);
//                         }

//                         count13=0;
//                     }
//                 }
// )

// play14.addEventListener("click",

//     function(){

//         play14.style.display = "none";

//         play14Film.style.display= "inherit"

//         console.log("clickLink");

//         count14=0;

//         console.log(count14);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count14=count14+1;
//                     console.log("clickBody");
//                     console.log(count14);

//                     if (count14==2){

//                         if (play14Film.style.display == "inherit"){

//                             play14Film.style.display = "none";

//                             play14.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play14Film.getAttribute('src');

//                             play14Film.setAttribute('src', '');

//                             play14Film.setAttribute('src', videoSource);
//                         }

//                         count14=0;
//                     }
//                 }
// )

// play0.addEventListener("click",

//     function(){

//         play0.style.display = "none";

//         play0Film.style.display= "inherit"

//         console.log("clickLink");

//         count0=0;

//         console.log(count0);
//     }
// )

// play15.addEventListener("click",

//     function(){

//         play15.style.display = "none";

//         play15Film.style.display= "inherit"

//         console.log("clickLink");

//         count15=0;

//         console.log(count15);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count15=count15+1;
//                     console.log("clickBody");
//                     console.log(count15);

//                     if (count15==2){

//                         if (play15Film.style.display == "inherit"){

//                             play15Film.style.display = "none";

//                             play15.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play15Film.getAttribute('src');

//                             play15Film.setAttribute('src', '');

//                             play15Film.setAttribute('src', videoSource);
//                         }

//                         count15=0;
//                     }
//                 }
// )

// play16.addEventListener("click",

//     function(){

//         play16.style.display = "none";

//         play16Film.style.display= "inherit"

//         console.log("clickLink");

//         count16=0;

//         console.log(count16);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count16=count16+1;
//                     console.log("clickBody");
//                     console.log(count16);

//                     if (count16==2){

//                         if (play16Film.style.display == "inherit"){

//                             play16Film.style.display = "none";

//                             play16.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play16Film.getAttribute('src');

//                             play16Film.setAttribute('src', '');

//                             play16Film.setAttribute('src', videoSource);
//                         }

//                         count16=0;
//                     }
//                 }
// )

// play17.addEventListener("click",

//     function(){

//         play17.style.display = "none";

//         play17Film.style.display= "inherit"

//         console.log("clickLink");

//         count17=0;

//         console.log(count17);
//     }
// )

// off.addEventListener("click",

//                 function(){                    

//                     count17=count17+1;
//                     console.log("clickBody");
//                     console.log(count17);

//                     if (count17==2){

//                         if (play17Film.style.display == "inherit"){

//                             play17Film.style.display = "none";

//                             play17.style.display = "inherit";

//                             // turn off video after display:none;

//                             var videoSource=play17Film.getAttribute('src');

//                             play17Film.setAttribute('src', '');

//                             play17Film.setAttribute('src', videoSource);
//                         }

//                         count17=0;
//                     }
//                 }
// )