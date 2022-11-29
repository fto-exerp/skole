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
        <StackLayout>

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
    apiGetData() {},
  },
  mounted() {},
  components: { StackLayout, Label },
};
</script>

<style scoped lang="scss">
MDTabStripItem {
  background-color: #f4f4f4;
}
</style>
