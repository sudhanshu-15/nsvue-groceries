<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
    </ActionBar>

    <StackLayout>
      <TextField hint="Email Address" keyboardType="email" autocorrect="false" />
    </StackLayout>

  </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>
