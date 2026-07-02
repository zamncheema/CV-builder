<template>
  <div class="home-container">
    <div class="hero-card">
      <div class="logo-badge">
        <div class="logo-line long"></div>
        <div class="logo-line mid"></div>
        <div class="logo-line short"></div>
        <div class="logo-avatar"></div>
      </div>

      <h1 class="hero-title">ProBuilder <span class="accent-text">Instant</span></h1>
      <p class="hero-subtitle">
        Craft stunning, industry-standard professional resumes in seconds. Built with a lightning-fast client-side engine to ensure your data stays secure and localized.
      </p>

      <div class="features-minimal">
        <div class="feat-tag">✨ 100% Free & No Sign-Up</div>
        <div class="feat-tag">⚡ Live Premium A4 Preview</div>
        <div class="feat-tag">🔒 Privacy First (Local Storage)</div>
      </div>

      <router-link to="/builder" class="cta-btn-premium">
        <span>Build Your Resume — It's Free</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </router-link>
    </div>
  </div>
</template>