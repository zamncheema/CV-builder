<template>
  <div class="form-card">
    <h3>Personal Info</h3>
    <input v-model="localData.name" placeholder="Full Name" />
    <input v-model="localData.email" placeholder="Email" />
    <input v-model="localData.phone" placeholder="Phone" />
    <button class="btn" @click="submit">Save</button>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  info: { type: Object, required: true }
})
const emit = defineEmits(['update-info'])

// Local state taake inputs smoothly kam karain
const localData = reactive({ ...props.info })

// Agar parent se kabhi data badle toh update ho jaye
watch(() => props.info, (newVal) => {
  Object.assign(localData, newVal)
}, { deep: true })

function submit() {
  emit('update-info', { ...localData })
}
</script>