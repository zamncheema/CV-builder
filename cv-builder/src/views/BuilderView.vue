<template>
  <div class="builder-dashboard">
    <div class="input-panel">
      <div class="panel-header">
        <h2>Professional CV Builder</h2>
        <p>Fill in your details below to build a dynamic, industry-standard resume.</p>
      </div>

      <div class="forms-stack">
        <div class="form-card">
          <h3>Personal Details</h3>
          <input type="text" v-model="cvData.personal.name" placeholder="Full Name" />
          <input type="email" v-model="cvData.personal.email" placeholder="Email Address" />
          <vue-tel-input 
  v-model="cvData.personal.phone" 
  mode="international"
  :dropdownOptions="{ showDialCodeInSelection: true, showFlags: true }"
  placeholder="Enter phone number"
  class="custom-phone-input"
  @input="updateSessionCache"
></vue-tel-input>
        </div>

        <div class="form-card">
          <h3>Education Background</h3>
          <input type="text" v-model="cvData.education.degree" placeholder="Degree (e.g., BS Software Engineering)" />
          <input type="text" v-model="cvData.education.institute" placeholder="University/Institute Name" />
          <input type="text" v-model="cvData.education.year" placeholder="Passing Year (e.g., 2026)" />
        </div>

        <div class="form-card">
          <div class="section-header-flex">
            <h3>Work Experience</h3>
            <button class="btn-secondary-add" @click="addExperience">+ Add</button>
          </div>
          
          <div v-for="(exp, index) in cvData.experience" :key="index" class="dynamic-input-row-box">
            <input type="text" v-model="exp.role" placeholder="Job Title / Role" />
            <input type="text" v-model="exp.company" placeholder="Company Name" />
            <input type="text" v-model="exp.duration" placeholder="Duration (e.g., 2024 - Present)" />
            <button class="btn-row-remove" @click="removeExperience(index)">Remove</button>
          </div>
        </div>

        <div class="form-card">
          <div class="section-header-flex">
            <h3>Skills</h3>
            <button class="btn-secondary-add" @click="addSkill">+ Add</button>
          </div>
          
          <div v-for="(skill, index) in cvData.skills" :key="index" class="dynamic-input-row-box simple-row">
            <input type="text" v-model="cvData.skills[index]" placeholder="Skill (e.g., Vue.js, JavaScript)" />
            <button class="btn-row-remove" @click="removeSkill(index)">Remove</button>
          </div>
        </div>
      </div>
    </div>

    <div class="live-preview-pane">
      <div class="preview-sticky-card">
        <span class="pane-badge">Live Preview</span>

        <div class="mini-cv-sheet">
          <div class="mini-sidebar">
            <div class="mini-avatar"></div>
            <div class="mini-text title">{{ cvData.personal.name || 'Your Name' }}</div>
            <div class="mini-text sub">Software Engineer</div>
            <div class="mini-line-decor"></div>
            <div class="mini-text" style="font-size: 0.45rem;">{{ cvData.personal.email || 'email@example.com' }}</div>
          </div>
          <div class="mini-body">
            <div class="mini-section-title"></div>
            <div class="mini-text block-bold">{{ cvData.education.degree || 'Degree Major' }}</div>
            <div class="mini-text block-sub">{{ cvData.education.institute || 'University' }}</div>
          </div>
        </div>

        <button class="finalize-btn" @click="saveAndPreview">
          ✨ Generate Full Premium PDF
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cvData = ref({
  personal: { name: '', email: '', phone: '' },
  education: { degree: '', institute: '', year: '' },
  experience: [],
  skills: []
})

onMounted(() => {
  // Check karte hain ke kya hum Preview se wapas aaye hain ya pehle se tab active hai
  const savedData = sessionStorage.getItem('cvData')
  
  if (savedData) {
    cvData.value = JSON.parse(savedData)
  } else {
    // Agar direct ya bilkul fresh open hua hai toh clear/blank field rakhein
    cvData.value = {
      personal: { name: '', email: '', phone: '' },
      education: { degree: '', institute: '', year: '' },
      experience: [],
      skills: []
    }
  }
})

// Input field updates ko realtime track karne ke liye automatic session cache update
function updateSessionCache() {
  sessionStorage.setItem('cvData', JSON.stringify(cvData.value))
}

function addExperience() {
  cvData.value.experience.push({ role: '', company: '', duration: '' })
  updateSessionCache()
}

function removeExperience(index) {
  cvData.value.experience.splice(index, 1)
  updateSessionCache()
}

function addSkill() {
  cvData.value.skills.push('')
  updateSessionCache()
}

function removeSkill(index) {
  cvData.value.skills.splice(index, 1)
  updateSessionCache()
}

function saveAndPreview() {
  // Final state save karte hain preview display ke liye
  sessionStorage.setItem('cvData', JSON.stringify(cvData.value))
  localStorage.setItem('cvData', JSON.stringify(cvData.value))
  router.push('/preview')
}
</script>