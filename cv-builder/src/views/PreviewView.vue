<template>
  <div class="preview-container">
    
    <!-- Action Top Bar (Sirf browser me dikhegi, PDF me automatic hide ho jayegi) -->
    <div class="preview-actions-bar no-print">
      <button class="btn-action-nav back" @click="goBack">← Edit Details</button>
      <button class="btn-action-nav download" @click="triggerDownloadPDF">
        📥 Save & Download PDF
      </button>
    </div>

    <!-- Main CV Sheet Frame -->
    <div class="cv-paper-premium">
      
      <!-- Left Sidebar -->
      <aside class="cv-sidebar">
        <div class="profile-initials">
          {{ cvData.personal.name ? cvData.personal.name.charAt(0).toUpperCase() : 'CV' }}
        </div>
        
        <h1 class="sidebar-name">{{ cvData.personal.name || 'Your Name' }}</h1>
        <p class="sidebar-title">Software Engineer</p>

        <hr class="sidebar-divider" />

        <div class="sidebar-section">
          <h3>Contact</h3>
          <p class="contact-line">📧 {{ cvData.personal.email || 'email@example.com' }}</p>
          <p class="contact-line">📞 {{ cvData.personal.phone || 'Phone Number' }}</p>
        </div>

        <div class="sidebar-section" v-if="cvData.skills && cvData.skills.length > 0">
          <h3>Skills</h3>
          <div class="skills-vertical-container">
            <span v-for="(skill, i) in cvData.skills" :key="i" class="premium-badge">
              {{ skill }}
            </span>
          </div>
        </div>
      </aside>

      <!-- Right Main Content Area -->
      <main class="cv-main-content">
        
        <!-- Education Section -->
        <section class="main-section">
          <div class="section-icon-header">
            <span class="icon-box">🎓</span>
            <h2>Education</h2>
          </div>
          <div class="premium-timeline-item">
            <div class="timeline-meta">
              <span class="timeline-date">{{ cvData.education.year || '2022 - 2026' }}</span>
            </div>
            <div class="timeline-content">
              <h4>{{ cvData.education.degree || 'Degree Title or Major' }}</h4>
              <p class="inst-name">{{ cvData.education.institute || 'University Name' }}</p>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section class="main-section" v-if="cvData.experience && cvData.experience.length > 0">
          <div class="section-icon-header">
            <span class="icon-box">💼</span>
            <h2>Work Experience</h2>
          </div>
          <div v-for="(exp, i) in cvData.experience" :key="i" class="premium-timeline-item">
            <div class="timeline-meta">
              <span class="timeline-date">{{ exp.duration }}</span>
            </div>
            <div class="timeline-content">
              <h4>{{ exp.role }}</h4>
              <p class="inst-name">{{ exp.company }}</p>
            </div>
          </div>
        </section>

      </main>
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

function loadCVData() {
  const savedData = localStorage.getItem('cvData')
  if (savedData) {
    cvData.value = JSON.parse(savedData)
  }
}

onMounted(() => {
  loadCVData()
})

function goBack() {
  router.push('/builder')
}

function triggerDownloadPDF() {
  window.print()
}
</script>