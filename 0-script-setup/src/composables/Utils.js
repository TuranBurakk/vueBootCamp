import {ref , onMounted} from 'vue'

export default function (){

        const title = ref("Başlık")
        const counter = ref(0)
        const inc = () => {
        counter.value++
    }

    const alertMe = () =>{
        alert("Tek")
    }

    onMounted(() => {
        console.log("mounted sırası")
    })

return { title, counter, inc, alertMe }
}