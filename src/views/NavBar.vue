<template>
  <div class="home">
    <nav class="navbar">
      <ul class="menu">
        <li v-for="(items, navbar) in MenuItems" :key="navbar">
          <router-link :to="{ path: items.router }">{{
            items.content.toUpperCase()
          }}</router-link>
        </li>
      </ul>
      <div class="searchNavbar">
        <input type="search" placeholder="I'm searching for..." />
        <span class="join">JOIN US</span>
        <router-link to="/WishList"
          ><font-awesome-icon class="heart" icon="fa-regular fa-heart"
        /></router-link>
        <span @click="isFullSize = !isFullSize"
          ><font-awesome-icon class="cart" icon="fa-solid fa-bag-shopping"
        /></span>
        <!--        <h3>{{ productCount }}</h3>-->
      </div>
    </nav>
    <header v-if="isFullSize" class="header" role="banner" @click.stop="isFullSize = !isFullSize">
      <div class="sidebar" @click.stop>
        <span class="CloseSidebar" @click="isFullSize = !isFullSize">asdad</span>

        <p>asaasdsdd</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    isFullSize: false,
    MenuItems: [
      { content: "home", router: "/HomeComponent", id: 1 },
      { content: "browse", router: "/Browse", id: 2 },
      { content: "content creators", router: "/ContentCreator", id: 3 },
      { content: "accountability partners", router: "/Accountability", id: 4 },
    ],
  }),
  components: {},
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: baseline;
}

.fullSize {
  transition: 0.5s;
  transform: translateX(700px);
}

.sidebar {
  width: 500px;
  transition: 0.5s;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: #05081d 0 0 no-repeat padding-box;
  opacity: 1;
  .CloseSidebar {
    color: white;
  }
}
.header{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #55555550;
}

.mushex{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  //display: none;
}
.searchNavbar {
  padding-left: 50px;
  display: flex;
  align-items: center;
  input {
    height: 45px;
    width: 600px;
    border: none;
    border-radius: 25px;
    padding: 15px;
    font-size: 15px;
    background-color: #f4f4f4;
    outline: none;
    cursor: pointer;
  }
  .join {
    background-color: #383f49;
    color: white !important;
    padding: 13px 20px;
    border-radius: 50px;
    text-decoration-line: none !important;
    font-size: 16px !important;
    margin-left: 50px;
  }
  .heart,
  .cart {
    width: 45px;
    height: 35px;
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
