<template>
  <div class="ResetPanel">
    <div class="navigationPanel">
      <div class="info">
        <RouterLink to="/"> <p>HOME</p></RouterLink>
        <span> > </span>
        <router-link to="/Shop"><p>SHOP</p></router-link>
        <span> > </span>
        <router-link to="/MyAccount">MY ACCOUNT</router-link>
      </div>
      <h2>My Account</h2>
    </div>
    <div class="ResetForm">
      <form @submit.prevent="forgetPassword" action="">
        <h3>
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </h3>
        <div class="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            class="form-control form-control-lg"
            v-model="user.email"
          />
        </div>
        <div class="buttons">
          <router-link to="/Login">Click Here To Login</router-link>
          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Reset password
          </button>
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
    },
  }),
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.ResetPanel {
  background-color: white;
  padding-bottom: 50px;
}
.ResetForm {
  width: 650px;
  border: 1px solid #ececec;
  border-top-width: 4px;
  border-top-color: #03a9f8;
  margin: 0 auto;
  margin-top: 45px;
  box-shadow: 0 0 10px 5px #ececec;
  padding: 40px;
  h3 {
    text-align: left;
    font-size: 14px;
    color: #7f8b8e;
    font-weight: 500;
  }
  .form-group {
    text-align: left;
    margin: 20px 0 10px 0;
    label {
      color: #7f8b8e;
    }
    input {
      width: 98%;
      padding: 6px;
      border: none;
      outline: none;
      border: 1px solid #dfdfdf;
    }
  }
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
.buttons {
  display: flex;
  justify-content: space-between;
  a {
    color: #4cadf9;
    text-decoration-line: none;
    font-size: 14px;
    &:hover {
      text-decoration-line: underline;
    }
  }
  button {
    padding: 10px;
    outline: none;
    border: none;
    background-color: #03a9f8;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(3, 169, 248, 0.8);
      transition: 0.3s;
    }
  }
}
</style>
