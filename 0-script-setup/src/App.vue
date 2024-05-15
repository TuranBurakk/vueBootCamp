<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title" />
    <button @click="inc">{{ counter }}</button>
    <hr />
    <OddOrEven :counter="counter" @odd-event="alertMe" />
    <hr />
    <h1>User App</h1>
    <input type="text" v-model="state.personal.name" />
    <input type="text" v-model="state.personal.lname" />
    {{ state.personal.name }} {{ state.personal.lname }}
  </div>
</template>

<script setup>
import { ref, reactive , watch } from "vue";
import Utils from "./composables/Utils";
import OddOrEven from "./components/oddOrEven.vue";
  const { title, counter, inc, alertMe } = Utils();
  //User App
  const state = reactive({
    personal:{
      name: null,
      lname: null,
    }
  })

  //eski ve yeni değeri izlemek için
  watch( () => JSON.parse(JSON.stringify(state.personal)) ,
    (newPersonal , oldPersonal) => {
    console.log(oldPersonal)
    console.log(newPersonal)
  })
</script>