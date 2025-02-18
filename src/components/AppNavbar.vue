<template>
  <nav>
    <div class="navbar-left">
      <img src="@/assets/EGLogo.png" alt="Logo" class="logo" />
      <span class="brand-text"
        ><span>Eco</span><span style="color: #4dbf38">Give</span></span
      >
    </div>
    <ul class="navbar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/donationpage">Services</router-link></li>
      <li><a href="#contact">Sign-In/Sign-Up</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "AppNavbar",
};
</script>
<style scoped>
/* Navbar Styling */

nav {
  position: relative;

  font-family: Arial Rounded MT;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
}

.navbar-left {
  margin-left: 10px;
  position: absolute;
  display: flex;
  align-items: center;
}

.logo {
  width: 40px; /* Adjust size as needed */
  height: auto;
  margin-right: 10px;
}

.brand-text {
  color: #2a2e3a;
  font-size: 20px;
  font-weight: bold;
}

/* Styling for the navigation links */
.navbar {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center; /* Centers the items horizontally */
  flex-grow: 1;
}

.navbar li {
  margin: 0 15px;
}

.navbar a,
.navbar router-link {
  text-decoration: none;
  color: #2a2e3a;
  font-size: 13px;
  padding: 5px 10px;
}

.navbar a:hover,
.navbar router-link:hover {
  background-color: #ddd;
  color: #333;
}
.navbar .router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #4dbf38;
}
</style>
