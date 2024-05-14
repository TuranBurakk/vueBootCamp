<template>
    <div>
        <h3 class="bg-blue text-white">Blue Component</h3>
        <input type="text" />
    </div>
</template>
<script>
    export default {
        mounted() {
        console.log("BLUE mounted");
    },
        activated() {
        console.log("BLUE activated");
    },
        deactivated() {
        console.log("BLUE deactivated");
    }
};
</script>