const app = Vue.createApp({
    data(){
        return {
            fullName: "burak turan"
        }
    },
    methods: {
        updateValue(event){
            this.fullName = event.target.value  
        }
    }
}).mount("#app")