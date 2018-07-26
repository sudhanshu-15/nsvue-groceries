<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Groceries">
    </ActionBar>

    <FlexboxLayout>
      <StackLayout>
        <TextField hint="Email Address" keyboardType="email" autocorrect="false"></TextField>
        <TextField hint="Password" secure="true"></TextField>
        <Button text="Sign in"></Button>
        <Button text="Sign up for Groceries"></Button>
      </StackLayout>
    </FlexboxLayout>

  </Page>
</template>

<script>
  
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
</style>