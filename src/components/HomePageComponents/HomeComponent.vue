<template>
  <div class="home">
    <div class="content">
      <h3>Best Sellers Books</h3>
      <div class="main">
        <div class="BooksExplore">
          <h2>BOOK CLUB</h2>
          <p>A Selection with only the best books</p>
          <img src="../../assets/banner-1.png" alt="" />
          <router-link to="/ExploreBooks"
            ><button class="Explore">EXPLORE BOOKS -></button></router-link
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background-color: #f4f4f4;
  height: 100rem;
  h3 {
    color: #222529;
    font-weight: normal;
    font-size: 15px;
    padding-top: 100px;
    text-align: left;
    margin-left: 280px;
  }
}
.main {
  margin: 0 auto;
  width: 70%;
  height: auto;
  background-color: white;
}
.BooksExplore {
  width: 400px;
  border-right: 2px solid #F3F3F3;
  padding: 80px 20px 70px;
  h2 {
    font-size: 19px;
    font-style: italic;
    color: #7a7e93;
    font-weight: 500;
  }
  p {
    font-size: 28px;
    color: #222529;
    font-weight: 600;
  }
  .Explore{
    margin-top: 30px;
    padding: 13px 55px 13px 30px;
    outline: none;
    border: none;
    background-color: #03A9F8;
    color: white;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }
}
</style>
