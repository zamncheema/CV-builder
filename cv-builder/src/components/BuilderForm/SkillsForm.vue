<template>
  <div class="form-card">
    <h3>Skills</h3>
    <input v-model="newSkill" placeholder="Add a skill" />
    <button class="btn" @click="submit">Add</button>
    <ul>
      <li v-for="(s, i) in skills" :key="i">{{ s }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({ skills: { type: Array, required: true } })
const emit = defineEmits(['add-skill'])

const newSkill = ref('')
function submit() {
  if (newSkill.value.trim()) {
    emit('add-skill', newSkill.value)
    newSkill.value = ''
  }
}
</script>