<template>
  <div class="RegForm">
    <form @submit.prevent="pressed" class="RegFormAction">
      <div class="inputs">
        <div v-if="error" class="error">
          {{ error.message }}
        </div>
        <label for="First Name">First Name <span>*</span></label
        ><br />
        <input
          v-model="firstName"
          type="text"
          name="First Name"
          autocomplete="off"
        />
        <br />
        <label for="Last Name">Last Name <span>*</span></label
        ><br />
        <input
          v-model="lastName"
          type="text"
          name="Last Name"
          autocomplete="off"
        />
        <br />
        <label for="Email">Email address <span>*</span></label
        ><br />
        <input
          v-model="email"
          type="email"
          name="Email address"
          autocomplete="off"
        />
        <br />
        <label for="Password">Password <span>*</span></label
        ><br />
        <input
          v-model="password"
          type="password"
          name="Password"
          autocomplete="off"
        />
        <br />
        <label for="ConfirmPassword">ConfirmPassword <span>*</span></label
        ><br />
        <input
          type="password"
          name="ConfirmPassword"
          autocomplete="off"
          v-model="confirmPassword"
        />
      </div>
      <div class="Register">
        <button type="submit" class="Registration">REGISTER</button>

        <p>
          Already have an account? <router-link to="/Login">Login</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    confirmPassword: "",
  }),
  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user)
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>

<style scoped lang="scss">
.RegForm {
  width: 450px;
  border: 1px solid #ececec;
  border-top-width: 4px;
  border-top-color: #03a9f8;
  margin: 0 auto;
  margin-top: 45px;
  box-shadow: 0 0 10px 5px #ececec;
}
.RegFormAction {
  padding: 20px;
  .inputs {
    margin-top: 20px;
    text-align: left;
    label {
      color: #7b858a;
      font-weight: 500;
      font-size: 14px;
      span {
        color: red;
      }
    }
    input {
      width: 92%;
      margin-bottom: 30px;
      padding: 10px;
      margin-top: 8px;
      border: none;
      border: 1px solid #dddddd;
    }
  }
  .error {
    color: red;
    font-size: 18px;
  }
  .Register {
    .Registration {
      padding: 15px;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: #222529;
      color: white;
      width: 100%;
      margin: 10px 0 40px 0;
      font-weight: 600;
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transition: 0.4s;
      }
    }
  }
}
</style>
