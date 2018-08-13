<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Groceries">
    </ActionBar>

    <GridLayout rows="auto, *" @loaded="load()">
        <Gridlayout row="0" columns="*, auto" class="add-bar">
            <TextField ref="groceryTextField" hint="Enter a grocery item" col="0" v-model="grocery"></TextField>
            <Image src="res://ic_add" col="1" @tap="add()"/>
        </Gridlayout>
        <ListView row="1" for="groceryObject in groceryList">
          <v-template>
              <label :text="groceryObject.name" @tap="itemTap()"></label>
          </v-template>
      </ListView>
    </GridLayout>

  </Page>
</template>

<script>
  import GroceryService from "../../services/GroceryService.js";
  const groceryService = new GroceryService();
  export default {
    data () {
      return {
        grocery: "",
        groceryList: [],
      }
    },
    methods: {
        load() {
            groceryService.load().then((loadedGroceries) => {
                console.log("List received: " + JSON.stringify(loadedGroceries));
                loadedGroceries.forEach((groceryObject) => {
                    console.log("Item: " + JSON.stringify(groceryObject));
                    this.groceryList.unshift(groceryObject);
                })
            }).catch(error => alert("Unable to fetch groceries" + error));
            console.log("List: " + this.groceryList.length);
        },
        add() {
            if (this.grocery === "") {
                alert("Enter a grocery item");
                return;
            }
            console.log("Grocery in field: " + this.grocery);
            groceryService.add(this.grocery).then((groceryObject) => {
                console.log("Grocery Object: " + JSON.stringify(groceryObject));
                this.groceryList.unshift(groceryObject);
                this.grocery = "";
            }).catch((error) => {
                alert(error);
            });
        },
        itemTap() {
            this.groceryList.forEach((groceryItem) => {
                console.log(this.groceryItem);
            });
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
.add-bar {
  background-color: #CB1D00;
  padding: 5;
}
.add-bar Image {
  height: 25;
  vertical-align: center;
  margin-left: 10;
  margin-right: 10;
}
.add-bar TextField {
  padding: 10;
}
</style>
