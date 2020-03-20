<template>
  <div id="app">
    <div id="page">
      <div id="side-menu">
        <div id="scroll-spacer">
          <i class="fas fa-angle-up fa-3x"></i>
        </div>
        <div class="menu-column">
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
}
#side-menu::-webkit-scrollbar {
  width: 0 !important;
}

#scroll-spacer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

#side-menu .menu-column {
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
  font-weight: bold;
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
  color: #4fa7f5;
  text-decoration: none;
}

a:active {
  color: #555555;
  text-decoration: none;
}

a:visited:hover {
  color: #4fa7f5;
  text-decoration: none;
}

a:visited:active {
  color: #555555;
  text-decoration: none;
}

</style>
