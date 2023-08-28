<template>
  <div class="login-page">
    <div class="container login-block">
      <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
      <div
        class="login-card _1adminOverveiw_table_recent shadow _box_shadow _border_radious _mar_b30 _p20 col-md-4"
      >
        <div class="login_header">
          <h2>SomeWhere</h2>
        </div>
        <div class="space">
          <Input type="email" v-model="data.email" placeholder="Email" />
        </div>
        <div class="space">
          <Input
            type="password"
            v-model="data.password"
            placeholder="Password"
          />
        </div>
        <div class="login_footer">
          <Button
            type="primary"
            :disabled="isLogging"
            :loading="isLogging"
            @click="login"
            >{{ isLogging ? "Logging in" : "Login" }}</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DI from "~/plugins/di-container";
import { LoginPayload } from "~/respositories/auth-repository";

export default defineComponent({
  layout: "unauthenticated",
  data() {
    return {
      data: {
        email: "",
        password: "",
      } as LoginPayload,
      isLogging: false,
      errorMsg: "sdsds",
    };
  },
  methods: {
    async login() {
      if (this.data.email.trim() == "")
        return this.$Notice.error({
          title: "Error",
          desc: "Email is required",
        });
      if (this.data.password.trim() == "")
        return this.$Notice.error({
          title: "Error",
          desc: "Password is required",
        });
      if (this.data.password.length < 6)
        return this.$Notice.error({
          title: "Error",
          desc: "Password must be more than 6 characters",
        });
      this.isLogging = true;
      try {
        const res = await DI.authService.login(this.data);
        console.log(res);
      } catch (error) {
        console.log(error);
        this.errorMsg = error as string;
        return this.$Notice.error({
          title: "Error",
          desc: error as string,
        });
      }
      // if (res.status === 200) {
      //   this.success(res.data.msg);
      //   window.location = "/";
      // } else {
      //   if (res.status === 401) {
      //     this.error(res.data.msg);
      //   } else if (res.status === 422) {
      //     for (let i in res.data.errors) {
      //       this.error(res.data.errors[i][0]);
      //     }
      //   } else {
      //     this.swr();
      //   }
      // }
      this.isLogging = false;
    },

    mounted() {
      // prints 'Hello Browser!' to the browser's console
      // this.$hello("Browser");
      console.log("first");
    },
  },

  mounted() {
    // prints 'Hello Browser!' to the browser's console
    // this.$hello("Browser");
  },
});
</script>

<style scoped>
._1adminOverveiw_table_recent {
  margin: 0 auto;
  /* margin-top: 220px; */
  /* border: 1px solid grey; */
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.login_footer,
.login_header {
  text-align: center;
}
.login_header {
  margin-bottom: 15px;
}
.login-page {
  background-image: url("~assets/images/svg/meal-background.svg");
  background-repeat: repeat-y !important;
  background-size: cover;
  height: 100vh;
  color: rgb(255, 255, 255);
  font-family: "Noto Sans JP", sans-serif;
}
.login-block {
  padding-top: 240px;
}
.login-card {
  background: rgb(251, 251, 251);
  color: #000;
}
</style>

function createError(arg0: number, arg1: string) { throw new Error("Function not
implemented."); }
