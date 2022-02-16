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
        <span>JOIN US</span>
        <router-link to="/WishList"></router-link>
        <h3>{{ productCount }}</h3>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
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
.searchNavbar {
  padding-left: 50px;
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
  span {
    background-color: #383f49;
    color: white !important;
    padding: 13px 20px;
    border-radius: 50px;
    text-decoration-line: none !important;
    font-size: 16px !important;
    margin-left: 50px;
  }
}
</style>
