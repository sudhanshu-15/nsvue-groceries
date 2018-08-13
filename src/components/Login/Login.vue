<template>
  <Page class="page" actionBarHidden="true">
    <ActionBar class="action-bar" title="Groceries">
    </ActionBar>

    <FlexboxLayout>
      <StackLayout class="form" :class="{dark: isLogginIn}">
        <image src="res://logo_login" />
        <TextField hint="Email Address" keyboardType="email" autocorrect="false" class="input input-border" v-model="user.email"></TextField>
        <TextField hint="Password" secure="true" class="input input-border" v-model="user.password"></TextField>
        <Button :text="isLogginIn ? 'Sign in' : 'Sign up'" class="btn btn-primary" @tap="submit"></Button>
        <Button :text="isLogginIn ? 'Sign up' : 'Back to login'" @tap="toggleDisplay"></Button>
      </StackLayout>
    </FlexboxLayout>

  </Page>
</template>

<script>
  import User from "../../models/Users.js";
  import UserService from "../../services/UserService.js";
  const userService = new UserService();
  export default {
    data () {
      return {
        user: User,
        isLogginIn: true,
      }
    },
    methods: {
      submit() {
        if (this.isLogginIn) {
          this.login();
        } else {
          this.signUp();
        }
      },
      login() {
        userService.login(this.user)
        .then(() => this.$router.push('/list'))
        .catch((error) => alert("Unfortunately we could not find your account." + error));
      },
      signUp() {
        userService.register(this.user)
        .then((response) => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
          }
        )
        .catch((error) => console.log(error));
      },
      toggleDisplay() {
        this.isLogginIn = !this.isLogginIn;
      }
    }
  }
</script>

<style scoped>
FlexboxLayout {
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("res://bg_login");
}
StackLayout {
  width: 300;
  padding: 10 16;
  background-color: #f0f0f0;
}
Image {
  margin-bottom: 20;
  height: 70;
}
Button, TextField {
  margin-bottom: 10;
}
.btn-primary {
  background-color: #CB1D00;
  margin-left: 0;
  margin-right: 0;
}
TextField {
  placeholder-color: #C4AFB4;
  color: black;
}
.dark {
  background-color: #301217;
}

.dark TextField {
  color:  #C4AFB4;
}
</style>