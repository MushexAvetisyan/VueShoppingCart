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
        <div class="gird">
          <div class="Products" v-for="(product, index) in $store.state.products" :key="index">
            <div class="image-wrapper">
              <img :src="product.ProductImg" alt="" class="image">
              <img :src="product.ProductImgHover" alt="" class="image-hover">
            </div>
            <p>{{product.ProductName}}</p>
            <h2>{{product.ProductPrice}}</h2>
          </div>
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
    padding-top: 100px;
    text-align: left;
    font-size: 22px;
    margin-left: 50px;
    border-bottom: 2px solid #E7E7E7;
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
}

.image-wrapper {
  position: relative;
}
.image-hover {
  position: absolute;
  top: 0;
  left: 50px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
.image-hover:hover {
  opacity: 1;
}

.Products{
  width: 300px;
  height: 380px;
  border-right: 2px solid #F3F3F3;
  border-bottom: 2px solid #F3F3F3;
  padding-top: 20px;
  img{
    width: 200px;
    height: 300px;
    cursor: pointer;
  }
}
.main {
  margin: 0 auto;
  width: 95%;
  height: auto;
  background-color: white;
  display: flex;
}

.gird{
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 0 0;
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
    height: 340px;
    margin-top: 30px;
  }
  .Explore {
    margin-top: 30px;
    padding: 20px 55px 20px 30px;
    outline: none;
    border: none;
    background-color: #03a9f8;
    color: white;
    font-weight: 500;
    font-size: 20px;
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
