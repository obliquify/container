<template>
  <div class="home-page">
      <div class="header">
        <h1>WELCOME TO CONTAINER!</h1>
      </div>
      <div class="intro">
        <h4 class = "intro">What is the purpose of CONTAINER?</h4>
        <p class = "intro">
          We have multiple things running through our mind daily.
          Our minds have then become a container for these thoughts,
          but our minds are something more than a 3D shape. They are 
          a neural network of what defines human existence: 
          emotion, memories, and connections to others
        </p>
      </div>
    <div class="footer">
      <p>2020 &#169; Kallie</p>
      <a target="blank" href="https://github.com/obliquify/container.git">REPOSITORY</a>
    </div>
    <div class="clr"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>


<style scoped>
* {
  background-color:#EADEDA;
  color: #fff;
  box-sizing: border-box;
  align-items: center;
  margin: 0;
  padding: 0;
}

.header {
  padding-top: 30px;
  padding-bottom: 30px;
}

.intro {
  display: flex;
  justify-content: center;
  height: 300px;

}
.intro h4 {
  text-align: center;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
  background: rgba(207, 207, 207, 0.6)

}

.intro p {
  text-align: left;
  padding: 20px;
  margin-bottom: 50px;
  margin-right: 20px;
  background: rgba(207, 207, 207, 0.3)
}

.footer {
  padding-bottom: 30px;
}




.clr{clear:both}
</style>>


