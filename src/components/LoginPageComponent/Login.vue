<template>
  <div class="LoginPanel">
    <div class="navigationPanel">
      <div class="info">
        <RouterLink to="/"> <p>HOME</p></RouterLink>
        <span> > </span>
        <router-link to="/Login"><p>LOGIN</p></router-link>
      </div>
      <h2>Login</h2>
    </div>
    <div class="LogForm">
      <form @submit.prevent="userLogin" class="logFormAction">
        <h2>Login</h2>
        <div class="inputMail">
          <label for="email">email address</label><br />
          <input v-model="user.email" type="text" name="email" required />
        </div>
        <div class="inputPassword">
          <label for="password">password</label><br />
          <input
            type="password"
            name="password"
            required
            v-model="user.password"
          />
        </div>
        <div class="HelpLogin">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">Remember Me</label>
          <router-link to="/ResetPassword"
            ><span>Forgot Password?</span></router-link
          >
        </div>

        <div class="LogOrRegister">
          <button type="submit" class="Login">LOGIN</button>
          <router-link to="/Registration"
            ><p class="RegNow">Register Now!</p></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/MyProfile");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.LoginPanel {
  background-color: white;
  padding-bottom: 50px;
}
.LogForm {
  width: 450px;
  border: 1px solid #ececec;
  border-top-width: 4px;
  border-top-color: #03a9f8;
  margin: 0 auto;
  margin-top: 45px;
  box-shadow: 0 0 10px 5px #ececec;
}
.logFormAction {
  padding: 20px;
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
    position: relative;
    left: 120px;
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
.navigationPanel {
  padding-top: 50px;
  background: #f4f4f4;
  height: 120px;
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #03a9f8;
    text-decoration-line: none;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    &.router-link-exact-active {
      color: black;
    }
  }
  span {
    margin-left: 10px;
  }
  h2 {
    color: #222529;
  }
}
</style>
