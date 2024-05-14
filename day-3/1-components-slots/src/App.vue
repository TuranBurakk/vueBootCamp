<template>
  <!-- <CustomModal :onSave="onSave" :title="'CustomModal Title'" :content="content" /> -->
  <CustomModal>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>
    <template v-slot:content>
      <p class="text-green">
        test
      </p>
    </template>
    <!-- <template #content>
      <p class="text-green">
        test
      </p>
    </template> -->
    <template #default>
      Bu default olarak gösterilecek..
    </template>
  </CustomModal>
</template>

<script>
import CustomModal from "@/components/CustomModal";
export default {
  components: {
    CustomModal
  },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    }
  }
};
</script>