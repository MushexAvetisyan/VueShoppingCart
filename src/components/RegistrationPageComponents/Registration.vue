<template>
  <div class="Registration">
    <div class="navigationPanel">
      <div class="info">
        <RouterLink to="/"> <p>HOME</p></RouterLink>
        <span> > </span>
        <router-link to="/Registration"><p>REGISTER</p></router-link>
      </div>
      <h2>Register</h2>
    </div>
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from "@/components/RegistrationPageComponents/RegistrationForm";
export default {
  data: () => ({}),
  components: {
    RegistrationForm,
  },
};
</script>

<style scoped lang="scss">
.Registration {
  background-color: white;
  padding-bottom: 50px;
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
