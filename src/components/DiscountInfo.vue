<template>
  <div class="Discount">
    <div class="main">
      <div class="first">
        <font-awesome-icon  icon="fa-solid fa-truck-fast" />
        <h4>Free Shipping on Orders Over $99</h4>
      </div>
      <div class="second">
        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
        <h4>Up to 40% OFF on Selected Items</h4>
      </div>
      <div class="three">
        <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        <h4>15% OFF Student Discount</h4>
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
.main{
  display: flex;
  width: 100%;
}
.first{
  width: 50%;
  height: 50px;
  background-color: #03A9F8;
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    color: white;
    font-size: 13px;
  }
  svg{
    margin-right: 15px;
    color: white;
  }
}

.second{
  width: 50%;
  height: 50px;
  background-color: #0098E0;
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    color: white;
    font-size: 13px;
  }
  svg{
    margin-right: 15px;
    color: white;
  }
}
.three{
  width: 50%;
  height: 50px;
  background-color: #03A9F8;
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    color: white;
    font-size: 13px;
  }
  svg{
    margin-right: 15px;
    color: white;
  }
}
</style>
