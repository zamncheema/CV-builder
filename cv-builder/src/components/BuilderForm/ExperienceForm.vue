<template>
  <div class="form-card">
    <h3>Experience</h3>
    <input v-model="newExp.role" placeholder="Job Title" />
    <input v-model="newExp.company" placeholder="Company Name" />
    <input v-model="newExp.duration" placeholder="Duration (e.g. Jan 2025 - Present)" />
    <button class="btn" @click="submit">Add Experience</button>
    <ul>
      <li v-for="(exp, i) in experiences" :key="i">
        {{ exp.role }} — {{ exp.company }} ({{ exp.duration }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({ experiences: { type: Array, required: true } })
const emit = defineEmits(['add-experience'])

const newExp = reactive({ role: '', company: '', duration: '' })

function submit() {
  if (newExp.role.trim()) {
    emit('add-experience', { ...newExp })
    newExp.role = ''
    newExp.company = ''
    newExp.duration = ''
  }
}
</script>