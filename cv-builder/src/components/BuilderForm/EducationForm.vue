<template>
  <div class="form-card">
    <h3>Education</h3>
    <input v-model="localData.degree" placeholder="Degree (e.g. BS Software Engineering)" />
    <input v-model="localData.institute" placeholder="Institute Name" />
    <input v-model="localData.year" placeholder="Year (e.g. 2022 - 2026)" />
    <button class="btn" @click="submit">Save</button>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  education: { type: Object, required: true }
})
const emit = defineEmits(['update-education'])

const localData = reactive({ ...props.education })

watch(() => props.education, (newVal) => {
  Object.assign(localData, newVal)
}, { deep: true })

function submit() {
  emit('update-education', { ...localData })
}
</script>