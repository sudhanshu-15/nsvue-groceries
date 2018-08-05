<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Groceries">
    </ActionBar>

    <FlexboxLayout>
      <StackLayout class="form">
        <image src="res://logo_login" />
        <TextField hint="Email Address" keyboardType="email" autocorrect="false" class="input input-border" :text="email"></TextField>
        <TextField hint="Password" secure="true" class="input input-border"></TextField>
        <Button text="Sign in" class="btn btn-primary" @tap="submit"></Button>
        <Button text="Sign up for Groceries"></Button>
      </StackLayout>
    </FlexboxLayout>

  </Page>
</template>

<script>
  export default {
    data () {
      return {
        email: "nativescriptrocks@progress.com",
      }
    },
    methods: {
      submit() {
        alert("You are using:" + this.email);
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
</style>