<template>
  <div id="app">
    <DiscountInfo />
    <div id="nav">
      <router-link to="/"
        ><img src="./assets/logo-black.a6c1822.png" alt=""
      /></router-link>
      <NavBar />
    </div>

    <router-view />
    <Footer />
  </div>
</template>

<script>
import DiscountInfo from "@/components/DiscountInfo";
import NavBar from "@/views/NavBar.vue";
import Footer from "@/views/Footer";
export default {
  data: () => ({

  }),
  components: {
    NavBar,
    DiscountInfo,
    Footer
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  background-color: white;

  a {
    font-weight: bold;
    color: black;
    font-size: 15px;

    &.router-link-exact-active {
      color: #FE1A5B;
    }
    img{
      width: 150px;
    }
  }
  ul{
    display: flex;
    list-style-type: none;
    margin-top: 15px;
    margin-left: 25px;
    padding-right: 15px;
    border-right: 2px solid white;
    li{
      a{
        margin-left: 30px;
        text-decoration-line: none;
        &:hover{
          color: #FE1A5B;
          transition: 0.5s;
        }
      }
    }
  }
}
</style>
