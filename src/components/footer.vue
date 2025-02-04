<template>
  <footer>
    <hr size="1px" />
    <section class="FooterHead">
      <div class="FooterLogo">
        <img src="@/assets/EGLogo.png" alt="Logo" class="logo" />
        <span class="brand-text">
          <span>Eco</span><span style="color: #4dbf38">Give</span></span
        >
      </div>
    </section>

    <section class="Social">
      <div>
        <a href="https://www.facebook.com/sangamlung.gangmei/">
          <img src="@/assets/Facebook.png" alt="facebook" />
        </a>
        <a href="https://www.facebook.com/sangamlung.gangmei/">
          <img src="@/assets/Insta.png" alt="Insta" />
        </a>
        <a href="https://www.facebook.com/sangamlung.gangmei/">
          <img src="@/assets/Youtube.png" alt="Youtube" />
        </a>
      </div>
    </section>
    <section class="Links">
      <div>
        <ul>
          <li>About Us</li>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>About Us</li>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>About Us</li>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </section>
    <hr size="1px" />
    <section>All Rights Reserved</section>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style scope>
footer {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: small;
  color: #fffbfb;
  background-color: #2a2e3a;
}
hr {
  margin: auto;
  width: 60%;
}
.logo {
  margin-right: 10px;
  width: 40px;
  height: auto;
}
.brand-text {
  color: #fffbfb;
  font-size: 20px;
  font-weight: bold;
}
.FooterLogo {
  display: flex;
  align-items: center;
}
.FooterHead {
  margin-top: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.Social {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Social img {
  width: 15px;
  padding: 2px;
}
.Social a {
  opacity: 75%;
  text-decoration: none;
}
.Social a:hover {
  opacity: 100%;
}
.Social div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7vh;
}

.Links ul {
  list-style: none;

  padding-left: 9vw;
  padding-right: 9vw;
}
.Links ul li {
  margin-bottom: 10px;
}
</style>
