const app = Vue.createApp({
    data() {
      return {
        search: "",
        itemList: ["elma", "armut", "kiraz", "çilek"],
      };
    },
    computed : {
      filteredList(){
          return this.itemList.filter((i) => i.includes(this.search))
      }
    }
  }).mount("#app");
  