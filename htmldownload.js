function CreateHtml() {
    var htmlContent = TraverseThroughReport();
  
    $('#btn_download').attr('download', 'sampleFile.html');
    $('#btn_download').attr('href', 'data:text/html,' + htmlContent);
    $('#btn_download').show();
  
  }
  
  function TraverseThroughReport() {
    var elements = document.getElementById("report").elements;
    var htmlContent = "";
    for (var i = 0, element; element = elements[i++];) {
      if (element.type === "text")
        //console.log("it's an empty textfield")
        htmlContent = "<h1>" + element.value + "</h1>";
    }
    //You can add as many conditions for placeholder etc to detect the form element type
  
    return htmlContent;
  }  