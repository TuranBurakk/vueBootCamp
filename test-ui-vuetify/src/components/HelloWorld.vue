<template>
  <v-container class="fill-height d-flex justify-center">
    <div class="text-center">
      <v-select
        v-model="location"
        :items="locations"
        label="Location"
      ></v-select>
      <v-menu v-model="menuOpen" :location="location">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" dark v-bind="props"> Dropdown </v-btn>
        </template>
        <div>
          <v-list class="pt-10">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-menu>
      <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list :items="items"></v-list>
  </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
])

const locations = ref([
  'top',
  'bottom',
  'start',
  'end',
  'center',
])

const location = ref('end')
const menuOpen = ref(false)
</script>
