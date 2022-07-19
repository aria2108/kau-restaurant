//Home Slideshow

    let slideIndex = 0;
    let t
    showSlides();
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dots");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        t = setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

// Menu 


   function openMenu(evt, menuName) {
    var i, tablist, tabmenu;
    tablist = document.getElementsByClassName("tablist");
    for (i = 0; i < tablist.length; i++) {
      tablist[i].style.display = "none";
    }
    tabmenu = document.getElementsByClassName("tabmenu");
    for (i = 0; i < tabmenu.length; i++) {
      tabmenu[i].className = tabmenu[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//Clearing the form

  function clearForm() {
    var inputName = document.getElementById("theirName").value;
    var inputQty = document.getElementById("theirQty").value
    var inputDate = document.getElementById("theirDate").value
    if (inputName, inputQty, inputDate == '') {
    alert ("Please fill in the field")
    } else{
      document.getElementById ("getBooked").innerHTML = "Thank you for your reservation!";
      document.getElementById ("bookForm").reset();
      document.getElementById ("bookForm").style.display = "none"
    }
  }