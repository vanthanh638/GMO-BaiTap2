var enter = document.getElementById("enter");
var txt = document.getElementById("txt");
var ta = document.getElementById("content");
enter.onclick = function() {chat()};
txt.onchange = function() {chat()};
function chat() {
    var b = document.getElementById("b");
    ta.value += txt.value + "\n";
    txt.value = "";
}
function changefont(val){
    var i = document.getElementById("i");
    var b = document.getElementById("b");
    if(val == "b") {
        if(b.value == "none") {
            b.value = "bold";
            b.style.background = "#9e9e9e";
        }else {
            b.value = "none";
            b.style.background = "";
        }
    }
    if(val == "i") {
        if(i.value == "normal") {
            i.value = "italic";
            i.style.background = "#9e9e9e";
        }else {
            i.value = "normal";
            i.style.background = "";
        }
    }
    var css = "font-weight:" + b.value + "; font-style:" + i.value;
    ta.style = css;
}
