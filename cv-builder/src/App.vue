<template>
  <nav style="padding: 1rem; display: flex; gap: 1rem;">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/builder">Build CV</RouterLink>
    <RouterLink to="/preview">Preview</RouterLink>
  </nav>
  <RouterView />
</template>
