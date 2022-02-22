<template>
  <div class="footer">
    <div class="main">
      <div class="NTrack">
        <span>
          <img src="../assets/logo-black.a6c1822.png" alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          atque autem incidunt magnam minima porro rem voluptatem. Consectetur
          cumque esse et id?
        </p>
      </div>
      <div class="Account">
        <h3>Account</h3>
        <ul>
          <li v-for="(items, account) in AccountItems" :key="account">
            <router-link :to="{ path: items.router }">
              {{ items.content }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="About">
        <h3>About</h3>
        <ul>
          <li v-for="(items, About) in AboutItems" :key="About">
            <router-link :to="{ path: items.router }">
              {{ items.content }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="Features">
        <h3>Features</h3>
        <ul>
          <li v-for="(items, Features) in FeaturesItems" :key="Features">
            <router-link :to="{ path: items.router }">
              {{ items.content }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    AccountItems: [
      { content: "My Account", router: "/MyProfile", id: 1 },
      { content: "Track Your Order", router: "", id: 2 },
      { content: "Payment Methods", router: "", id: 3 },
      { content: "Shipping Guide", router: "", id: 4 },
      { content: "FAQs", router: "", id: 5 },
      { content: "Product Support", router: "", id: 6 },
      { content: "Privacy", router: "", id: 7 },
    ],
    AboutItems: [
      { content: "About Porto", router: "", id: 1 },
      { content: "Our Guarantees", router: "", id: 2 },
      { content: "Terms And Conditions", router: "", id: 3 },
      { content: "Privacy policy", router: "", id: 4 },
      { content: "Return Policy", router: "", id: 5 },
      { content: "Intellectual Property Claims", router: "", id: 6 },
      { content: "Site Map", router: "", id: 7 },
    ],
    FeaturesItems: [
      { content: "About Porto", router: "", id: 1 },
      { content: "Our Guarantees", router: "", id: 2 },
      { content: "Terms And Conditions", router: "", id: 3 },
      { content: "Privacy policy", router: "", id: 4 },
    ],
  }),
};
</script>

<style scoped lang="scss">
.footer {
  background-color: white;
}

.main {
  display: flex;
  justify-content: space-around;
  text-align: left;
  border-top: 1px solid #e1e1e1;
  padding-top: 30px;
  width: 80%;
  margin: 0 auto;
}
.NTrack {
  img {
    width: 150px;
  }
  p {
    width: 700px;
  }
}

.Account,
.About,
.Features {
  ul {
    li {
      list-style-type: none;
      a {
        color: #848689;
        font-size: 13px;
        text-decoration-line: none;

        &.router-link-exact-active {
          color: #848689;
        }
      }
    }
  }
}
</style>
