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
            ><button class="Explore">EXPLORE BOOKS <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button></router-link
          >
        </div>
        <ProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/HomePageComponents/ProductsList";
export default {
  data: () => ({

  }),
  components: {
    ProductsList
  },
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
    padding-top: 100px;
    text-align: left;
    font-size: 22px;
    margin-left: 50px;
    border-bottom: 2px solid #E7E7E7;
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
}


.main {
  margin: 0 auto;
  width: 85%;
  height: auto;
  background-color: white;
  display: flex;
}
.BooksExplore {
  width: 400px;
  border-right: 2px solid #f3f3f3;
  padding: 80px 70px 70px;
  h2 {
    font-size: 19px;
    font-style: italic;
    color: #7a7e93;
    font-weight: 500;
  }
  p {
    font-size: 30px;
    color: #222529;
    font-weight: 600;
    letter-spacing: 1px;
  }
  img{
    height: 270px;
    margin-top: 30px;
  }
  .Explore {
    margin-top: 30px;
    padding: 15px 25px 15px 20px;
    outline: none;
    border: none;
    background-color: #03a9f8;
    color: white;
    font-weight: 500;
    font-size: 17px;
    cursor: pointer;
    i{
      margin-left: 15px;
    }
    &:hover{
      background-color: rgba(3, 169, 248, 0.8,);
      transition: 0.3s;
    }
  }
}
</style>
