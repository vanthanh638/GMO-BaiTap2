function checkAll(){
    var is_checkAll = document.getElementById("checkAll").checked;
    var allCheck = document.getElementsByName("check1");
    for (var i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = is_checkAll;
    }
}
function allCheck() {
    var c_all = true;
    var checkboxs = document.getElementsByName("check1");
    for (var i = 0; i < checkboxs.length; i++) {
        if (!checkboxs[i].checked) {
            c_all = false;
            break;
        }
    }
    document.getElementById("checkAll").checked = c_all;
}
function selectElement(name, id){
    gid = id;
    gname = name;
    element = document.getElementById("edit_"+name+"_"+id);
    element.hidden = false;
    var txt = document.getElementById("lb_"+name+"_"+id).textContent;
    element.value = txt;
    document.getElementById("lb_"+name+"_"+id).textContent = "";
}
function edit() {
    var obj = document.getElementById("edit_"+gname+"_"+gid);
    document.getElementById("lb_"+gname + "_" + gid).textContent = obj.value;
    obj.hidden = true;
}
function chageImg(){
    var nam = document.getElementById("nam").checked;
    var img = "";
    if (nam) {
        img = "male.jpg";
    } else {
        img = "female.png";
    }
    document.getElementById("img_gender").src = "images/" + img;
}
var addId = 1;
function addInput() {
  var addList = document.getElementById('addImages');
  var txt = document.createElement("div");
  addId++;
  txt.class= "addImage";
  txt.id = "addImage_" + addId;
  txt.innerHTML = "<input type='file' name='image' id='file_" +addId + "' onchange='handleFileSelect(" + addId + ")'><button onclick='removeInput("+addId+")'>x</button>";
  addList.appendChild(txt);
}
function removeInput(id) {
    var elem = document.getElementById("addImage_" + id);
    elem.parentNode.removeChild(elem);
}
function checkImg(item) {
    var all = document.getElementsByName("listImg");
    var imgs = document.getElementsByName("listImg");
    if (item == "all") {
        var c = true;
        var dis = "inline"
        if (!imgs[0].checked) {
                c = false;
                dis = "none";
        } else {
            c = true;
            dis = "inline";
        }
        for (var i = 1; i < imgs.length; i++){
            imgs[i].checked = c;
            document.getElementById(imgs[i].value).style.display = dis;
        }
    }else {
        var c_all = true;
        for (var i = 1; i < imgs.length; i++){
            if (imgs[i].checked) {
                document.getElementById(imgs[i].value).style.display = "inline";
            } else {
                document.getElementById(imgs[i].value).style.display = "none";
                c_all = false;
            }
        }
        imgs[0].checked = c_all;
    }
}
function changeBackground(link){
    var links = document.getElementsByTagName("li");
    switch(link) {
        case "all":
            for(var i =0; i < links.length; i++) {
                links[i].style.background = "red";
            }
            break;
        case "chan":
            for(var i =1; i < links.length - 2; i++) {
                if (i%2 == 0 && i > 0) {
                    links[i].style.background = "red";
                }
                else {
                     links[i].style.background = "none";
                }
                document.getElementById("le").style.background = "none";
            }
            break;
        case "le":
            for(var i =1; i < links.length - 2; i++) {
                if (i%2 != 0) {
                    links[i].style.background = "red";
                } else {
                     links[i].style.background = "none";
                }
                document.getElementById("chan").style.background = "none";
            }
            break;
        default:
            for(var i =0; i < links.length; i++) {
                if (i == parseInt(link)) {
                    links[i].style.background = "red";
                } else {
                     links[i].style.background = "none";
                }
            }
            break;
    }
}
