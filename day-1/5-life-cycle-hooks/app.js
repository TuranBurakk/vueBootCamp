const app = Vue.createApp({
  data() {
    return {
      title:'test başlık'
    };
  },
  beforeCreate(){
    console.log("beforeCreate çalıştı...")
  },
  created(){
    console.log("created çalıştı...")
  },
  beforeMount(){
    console.log("beforeMount çalıştı...")
  },
  mounted(){
    console.log("mounted çalıştı...")
  },
  beforeUpdate(){
    console.log("beforeUpdate çalıştı...")
  },
  updated(){
    console.log("updated çalıştı...")
  },
  beforeUnmount(){
    console.log("beforeUnmount çalıştı...")
  },
  unMounted(){
    console.log("unMounted çalıştı...")
  },
}).mount("#app");
