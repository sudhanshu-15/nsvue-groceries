<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Groceries">
    </ActionBar>

    <StackLayout @loaded="load()">
      <ListView for="grocery in groceryList">
          <v-template>
              <label :text="grocery.name"></label>
          </v-template>
      </ListView>
    </StackLayout>

  </Page>
</template>

<script>
  import GroceryService from "../../services/GroceryService.js";
  export default {
    data () {
      return {
        groceryList: [],
      }
    },
    methods: {
        load() {
            var groceryService = new GroceryService();
            groceryService.load().then((loadedGroceries) => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                })
            }).catch(error => alert("Unable to fetch groceries" + error));
            console.log("List: " + this.groceryList.length);
        }   
    }
  }
</script>

<style scoped>
Label {
    margin: 10;
    font-size: 18;
    font-weight: 400;
}
</style>
