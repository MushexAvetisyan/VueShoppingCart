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
        <input
          class="search"
          type="search"
          placeholder="I'm searching for..."
        />
        <simple-modal v-model="isShow">
          <template slot="body">
            <form action="" class="login_form">
              <h2>Login</h2>
              <div class="inputMail">
                <label for="email">email address</label><br />
                <input v-model="email" type="text" name="email" required />
              </div>
              <div class="inputPassword">
                <label for="password">password</label><br />
                <input
                  type="password"
                  name="password"
                  autocomplete="off"
                  required
                  v-model="password"
                />
              </div>
              <div class="HelpLogin">
                <input type="checkbox" id="checkbox" v-model="checked" />
                <label for="checkbox">Remember Me</label>
                <router-link to="/ResetPassword"
                  ><span @click="isShow = !isShow"
                    >Forgot Password?</span
                  ></router-link
                >
              </div>

              <div class="LogOrRegister">
                <button class="Login">LOGIN</button>
                <router-link to="/Registration"
                  ><p @click="isShow = !isShow" class="RegNow">
                    Register Now!
                  </p></router-link
                >
              </div>
            </form>
          </template>
          <template slot="footer"> </template>
        </simple-modal>
        <span class="join" @click="isShow = !isShow">JOIN US</span>
        <router-link to="/WishList"
          ><font-awesome-icon class="heart" icon="fa-regular fa-heart"
        /></router-link>
        <span @click="isFullSize = !isFullSize"
          ><font-awesome-icon class="cart" icon="fa-solid fa-bag-shopping"
        /></span>
      </div>
    </nav>
    <header
      v-if="isFullSize"
      class="header"
      role="banner"
      @click.stop="isFullSize = !isFullSize"
    >
      <div class="sidebar" @click.stop>
        <span class="CloseSidebar" @click="isFullSize = !isFullSize">X</span>
        <h2>Shopping Cart</h2>
        <p>No Products In The Cart</p>
        <p></p>
      </div>
    </header>
  </div>
</template>

<script>
import SimpleModal from "simple-modal-vue";
export default {
  name: "Home",
  data: () => ({
    isShow: false,
    isFullSize: false,
    checked: false,
    MenuItems: [
      { content: "home", router: "/", id: 1 },
      { content: "browse", router: "/Browse", id: 2 },
      { content: "content creators", router: "/ContentCreator", id: 3 },
      { content: "accountability partners", router: "/Accountability", id: 4 },
    ],
    email: "",
    password: "",
  }),
  components: {
    SimpleModal,
  },
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
  width: 300px;
  transition: 0.5s;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: white 0 0 no-repeat padding-box;
  opacity: 1;
  z-index: 111;
  h2 {
    text-align: left;
    margin-left: 25px;
    color: black;
    font-size: 20px;
  }
  p {
    text-align: left;
    margin-left: 25px;
    margin-top: 20px;
    font-size: 13px;
    color: #9a9a9a;
  }
  .CloseSidebar {
    cursor: pointer;
    position: relative;
    right: 180px;
    top: 10px;
    color: white;
    font-size: 25px;
  }
}
.header {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #55555550;
}
.searchNavbar {
  padding-left: 50px;
  display: flex;
  align-items: center;
  .search {
    height: 60px;
    width: 500px;
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
    padding: 18px 35px;
    border-radius: 50px;
    -webkit-text-decoration-line: none !important;
    text-decoration-line: none !important;
    font-size: 18px !important;
    margin-left: 50px;
    cursor: pointer;
    font-weight: 600;
  }
  .heart,
  .cart {
    width: 45px;
    height: 35px;
    margin-left: 15px;
    cursor: pointer;
  }
}

::v-deep {
  .vsm-modal {
    width: 530px;
    .btn-close {
      font-size: 30px;
    }
  }
  .vsm-modal-body {
    padding: 30px;
    h2 {
      text-align: left;
      font-size: 20px;
      color: black;
    }
    .login_form {
      .inputMail {
        margin-top: 10px;
        text-align: left;
        label {
          color: #838383;
          font-weight: 500;
          font-size: 14px;
        }
        input {
          width: 92%;
          padding: 10px;
          margin-top: 8px;
          border: none;
          border: 1px solid #dddddd;
        }
      }
      .inputPassword {
        margin-top: 30px;
        text-align: left;
        label {
          color: #838383;
          font-weight: 500;
          font-size: 14px;
        }
        input {
          width: 92%;
          padding: 10px;
          margin-top: 8px;
          border: none;
          border: 1px solid #dddddd;
        }
      }
    }
    .HelpLogin {
      display: flex;
      align-items: center;
      margin-top: 30px;
      input {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
      label {
        margin-left: 15px;
        font-size: 13px;
        color: #a7a7a7;
        cursor: pointer;
      }
      a {
        position: absolute;
        right: 45px;
        color: #222529 !important;
        text-decoration-line: none;
      }
    }
    .LogOrRegister {
      a {
        text-decoration-line: none;
      }
    }
    .Login {
      padding: 15px;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: #222529;
      color: white;
      width: 100%;
      margin: 30px 0 40px 0;
      font-weight: 600;
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transition: 0.4s;
      }
    }
    .RegNow {
      text-align: left;
      color: #222529;
      font-size: 15px;
    }
  }

  @media screen and (min-width: 992px) {
    .vsm-modal.responsive {
      max-width: 800px;
    }
  }
  @media screen and (min-width: 576px) {
    .vsm-modal.responsive {
      max-width: 500px;
    }
  }
}
</style>
