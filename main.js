var reasons = [
    "My Dad Vinod",
    "My Mom Poonam",
    "Me Avni",
    "My Dog Arrow"
];


var images = [
    "IMG_20190619_115320.jpg",
    "IMG_20190422_110913.jpg",
    "IMG_20190228_162857.jpg",
    "IMG_20190512_183055.jpg"
];

var i =0;
function nextslider() {
    
    document.getElementById("reason_text").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    if( i==4 ){
        i=0
        }
}