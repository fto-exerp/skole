<template>
  <Page>
    <MDBottomNavigation selectedIndex="1">
      <MDTabStrip>
        <MDTabStripItem>
          <Label text="Hjem"></Label>
          <Image src="~/images/home.png"></Image>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="El Priser"></Label>
          <Image src="~/images/graph.png"></Image>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Settings"></Label>
          <Image src="~/images/settings.png"></Image>
        </MDTabStripItem>
      </MDTabStrip>

      <MDTabContentItem>
        <GridLayout>
          <Label text="Hjem Psage" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <StackLayout>
          <Label text="Els Priser" class="h2 text-center"></Label>
          <Label>{{ name }}</Label>
        </StackLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <GridLayout>
          <Label text="Indstillinger Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
    </MDBottomNavigation>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      name: "John",
    };
  },
  methods: {
    apiGetData() {
    },
    getByDK() {
        console.log("hello")
    },
  },
  mounted() {
    this.getByDK()
  },
};
</script>

<style scoped lang="scss">
MDTabStripItem {
  background-color: #f4f4f4;
}
</style>
