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

//   const topmenu = document.createElement('banner id="box-container" ');
//   topmenu.innerHTML =
//       <banner id="box-container" >
//       <a href="https://2Keanan2.github.io/"><img src="/assets/aoa.jpg" alt="logo" class="pagelogo"></a> <!--logo links to main page-->
//       <div class="dropdown">
//       <a> <img src="/assets/menu-small.png" id="menu-img" class="dropdownbtn" ></a>
//       <div class="dropdown-content" >
//       <a href="sp.html">Blog 1 </a>
//       <a href="Blog2.html">Blog 2 </a>
//       <a href="goals.html">goals </a>
//       <a href="#">Blog 4 </a>  
//       </div>
//       </div>
//       </banner>
//   ;

//   const topweb = document.getElementById('webmenu');
//  topweb.appendChild(topmenu);
