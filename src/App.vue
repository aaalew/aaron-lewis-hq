<template>
  <div id="app">
    <div id="page">
      <div id="side-menu">
        <div id="scroll-spacer">
          <a href="#menu-column"><i class="fas fa-angle-up fa-3x"></i></a>
        </div>
        <div id="menu-column">
          <router-link to="/" class="menu-item">
            <p>Home</p>
          </router-link>
          <router-link to="/about" class="menu-item">
            <p>About</p>
          </router-link>
          <router-link to="/quotes" class="menu-item">
            <p>Quotes</p>
          </router-link>
          <router-link to="/contact" class="menu-item">
            <p>Contact</p>
          </router-link>
          <router-link to="/links" class="menu-item">
            <p>Links</p>
          </router-link>
        </div>
      </div>
      <div id="content">
        <router-view/>
      </div>
      <div id="none"></div>
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#page {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif, "Arial", monospace;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-areas: "side-menu content none";
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #111111;
}

#side-menu {
  grid-area: side-menu;
  overflow: auto;
  scroll-behavior: smooth;
}
#side-menu::-webkit-scrollbar,
#content::-webkit-scrollbar {
  width: 0 !important;
}

#scroll-spacer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

#side-menu #menu-column {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#side-menu .menu-item {
  display: flex;
  height: 20%;
  align-items: center;
  margin-left: 50px;
  font-size: 20px;
}

#content {
  grid-area: content;
  display: flex;
  overflow: auto;
}

a:link,
a:visited {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  color: #7750FA;
  text-decoration: none;
}

a:active {
  color: #555555;
  text-decoration: none;
}

a:visited:hover {
  color: #7750FA;
  text-decoration: none;
}

a:visited:active {
  color: #555555;
  text-decoration: none;
}

@media only screen and (max-width: 400px) {

  #page {
    grid-template-columns: 2fr 15fr 2fr;
    font-size: 16px;
  }

  #side-menu {
    overflow-x: hidden;
  }

  #side-menu .menu-item {
    transform: rotate(-90deg);
    width: 100%;
    height: 100;
    margin-left: 0px;
    justify-content: center;
  }
}

</style>
