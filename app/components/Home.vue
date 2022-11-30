<template>
  <Page>
    <MDBottomNavigation selectedIndex="0">
      <MDTabStrip>
        <MDTabStripItem>
          <Label text="Todo"></Label>
          <Image src="~/images/home.png"></Image>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Settings"></Label>
          <Image src="~/images/settings.png"></Image>
        </MDTabStripItem>
      </MDTabStrip>

      <MDTabContentItem>
        <Stacklayout>
          <Label
            text="Todo liste"
            style="margin-top: 10px; font-weight: bold"
            class="h2 text-center"
          ></Label>
          <StackLayout
            v-for="item in listOfItems"
            :key="item.id"
            orientation="horizontal"
          >
            <Switch
              @checkedChange="setStatus(item)"
              style="width: 25%"
              :checked="item.status"
            />
            <Label style="width: 40%" class="h2" :text="item.title" />
            <Button style="width: 10%" text="Slet" @tap="deleteItem(item)" />
            <Button style="width: 15%" text="Rediger" @tap="update(item)" />
          </StackLayout>
          <StackLayout>
            <TextField v-model="todoTitle" hint="Enter navn..." />
            <Button @tap="createTodo(todoTitle)" text="Create new"></Button>
          </StackLayout>
        </Stacklayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <Settings></Settings>
      </MDTabContentItem>
    </MDBottomNavigation>
  </Page>
</template>

<script>
import { Dialogs } from "@nativescript/core";
import Settings from "./Views/Settings.vue";
export default {
  data() {
    return {
      listOfItems: [],
      todoTitle: ''
    };
  },
  methods: {
    createTodo(title) {
      fetch("http://localhost:3000/todo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title
        }),
      })
        .then(() => {
          this.apiGetData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setStatus(item) {
      fetch("http://localhost:3000/todo/status", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          status: !item.status,
        }),
      })
        .then(() => {
          this.apiGetData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteItem(item) {
      fetch("http://localhost:3000/todo/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
        }),
      })
        .then(() => {
          this.apiGetData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    update(item) {
      Dialogs.prompt({
        title: "Opdater " + item.title,
        okButtonText: "Opdater",
        cancelButtonText: "Anuller",
        defaultText: item.title,
      }).then(async (r) => {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
        // User click confirm
        if (r.result) {
          await fetch("http://localhost:3000/todo/title", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: r.text,
              id: item.id,
            }),
          })
            .then(() => {
              this.apiGetData();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
    apiGetData() {
      fetch("http://localhost:3000/todo")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          this.listOfItems = response;
        });
    },
  },
  mounted() {
    this.apiGetData();
  },
  components: {
    Settings,
  },
};
</script>

<style scoped lang="scss">
MDTabStripItem {
  background-color: #f4f4f4;
}
</style>
