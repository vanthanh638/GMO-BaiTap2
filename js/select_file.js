function handleFileSelect(i) {
    var preview = document.querySelector('img');
    var file    = document.querySelector('#file_' + i).files[0];
    renderFileInfo(file, i);
    // var files = event.target.files;
    // for (var i = 0; i < files.length; i++) {
    //     var file = files[i];
    //     renderFileInfo(file);
    // }
}
function renderFileInfo(file, i) {
    var fileReader = new FileReader();
    var fdetail = document.getElementById("file-detail_" + i);


    fileReader.addEventListener('load',  function() {
        var imageUrl = event.target.result;
         if(fdetail == null) {
            var fileDetailHtml = '',
            detailElement = document.createElement('div');
            // hien thi anh
            if (file.type.match('image.*')) {
                fileDetailHtml += '<img width="200px" class="thumbnail" src="' + imageUrl + '" id="file-detail_'+ i + '"/>';
            }
            detailElement.className = 'file-detail_' + i;
            // detailElement.id = 'file-detail_' + i;
            detailElement.innerHTML = fileDetailHtml;
            document.getElementById('files-list').appendChild(detailElement);
         }else {
            fdetail.src = imageUrl;
        }
    }, false);
    fileReader.readAsDataURL(file);
}
