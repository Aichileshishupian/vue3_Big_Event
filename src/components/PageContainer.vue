<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="page-container">
    <div class="page-header">
      <h2>{{ props.title }}</h2>
      <div class="page-extra">
        <slot name="extra" />
      </div>
    </div>
    <div class="page-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.page-header h2 {
  margin: 0;
  font-size: 18px;
}
.page-extra {
  display: flex;
  align-items: center;
  gap: 10px;
}
.page-body {
  min-height: 360px;
}
</style>
