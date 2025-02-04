<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>
          Make a Difference <br /><span style="color: #4dbf38">Today !</span>
        </h1>
        <p style="font-size: 13px; margin-top: -20px">
          “Donate, Recycle, and Reuse to create a sustainable community.”
        </p>

        <ul class="cta">
          <li>Join-us</li>
          <li>How It Works</li>
        </ul>
      </div>
    </section>
    <section class="info">
      <div class="donate">
        <div class="circle1">
          <img src="@/assets/fortnite1.png" alt="donate" />
        </div>
        <div class="donateText">
          <h2>Donate</h2>
          <p>
            This platform is designed to bridge the gap between people who have
            items to donate and those in need, as well as to promote environme
            ntally responsible recycling by making it easier to locate recycling
            centres
          </p>
        </div>
      </div>

      <div class="Recycle">
        <div class="RecycleText">
          <h2>Donate</h2>
          <p>
            This platform is designed to bridge the gap between people who have
            items to donate and those in need, as well as to promote environme
            ntally responsible recycling by making it easier to locate recycling
            centres
          </p>
        </div>
        <div class="circle2">
          <img src="@/assets/fortnite1.png" alt="recycle" />
        </div>
      </div>

      <div class="donate">
        <div class="circle1">
          <img src="@/assets/fortnite1.png" alt="donate" />
        </div>
        <div class="donateText">
          <h2>Donate</h2>
          <p>
            This platform is designed to bridge the gap between people who have
            items to donate and those in need, as well as to promote environme
            ntally responsible recycling by making it easier to locate recycling
            centres
          </p>
        </div>
      </div>
      <div class="LearnMore">Learn More</div>
      <div style="margin-top: 15vh">
        <h1>Recent Donations</h1>
        <p style="margin: auto">
          A Hand for a <span style="color: #4dbf38">Change</span>
        </p>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh; /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero-content {
  margin-top: -100px;
  position: absolute;
  font-size: 45px;
  color: #2e2a3e; /* Text color for contrast */
}

.cta {
  font-size: 13px;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center; /* Centers the items horizontally */
}
.cta li {
  margin: 10px;
  align-content: center;
  font-family: Arial Rounded MT;
  width: 160px;
  height: 55px;
  border-radius: 15px;
  color: #fffbfb;
  background-color: #4dbf38;
  border: 0.5px solid #000;
}

.info {
  color: #fffbfb;
  position: relative;
  background-color: #2a2e3a;
  height: auto;
}
.donate {
  color: #fffbfb;
  position: relative;
  display: flex;
}
.circle1 img {
  background-color: #fffbfb;
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 6vh;
  margin-left: 8vw;
}
.donateText {
  margin-top: 4vh;
  margin-right: 10vw;
}
.donateText h2 {
  color: #4dbf38;
}

.Recycle {
  color: #fffbfb;
  position: relative;
  display: flex;
}
.circle2 img {
  background-color: #fffbfb;
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 6vh;
  margin-right: 8vw;
}
.RecycleText {
  margin-top: 6vh;
  margin-left: 10vw;
  float: left;
}

.LearnMore {
  margin-top: 3%;
  margin-left: 43vw;
  justify-content: center;
  align-content: center;
  font-family: Arial Rounded MT;
  width: 14vw;
  height: 50px;
  border-radius: 15px;
  color: #fffbfb;

  border: 0.8px solid #fffbfb;
}
</style>
