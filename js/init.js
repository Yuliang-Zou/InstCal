$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('select').material_select();


}); // end of document ready

function change_scale_img() {

    var img = document.getElementsByName("demo-img")[0];
    var method = img.id.split("-")[1];
    change_method(method);
}

function change_method(method) {

    // var x = document.getElementById("scale");
    // var i = x.selectedIndex;
    // var scale = x.options[i].value;

    x = document.getElementById("img-name");
    i = x.selectedIndex;
    var name = x.options[i].value;

    
    var img = document.getElementsByName("demo-img")[0];
    var filename = method + "/" + name;
    img.src = filename + ".jpg";
    img.id = "img-" + method;

    var caption = document.getElementById("img-caption");
    caption.innerHTML = method + "_" + name;
    
}


function change_vid_output() {
    var x = document.getElementById("output");
    var i = x.selectedIndex;
    var output = x.options[i].value;

    x = document.getElementById("vid-name");
    i = x.selectedIndex;
    var name = x.options[i].value;

    var vid = document.getElementById("demo-vid");
    var filename = "https://filebox.ece.vt.edu/~ylzou/eccv2018dfnet/video/" + output + "/" + name;
    vid.src = filename + ".mp4";
}

