<template>
  <app-header></app-header>
  <div class="container">
    <h3>First vue Cli</h3>
    <CounterItem />
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components: {
    CounterItem,
  },
};
</script>