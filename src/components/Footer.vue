<script setup>
const today = new Date();
const year = today.getFullYear();
</script>

<template>
  <footer class="flex p-8 bg-[#1f1f20]">
    <!-- Copyright -->
    <div class="mb-2 mr-auto">
      <p class="text-[#d5c8b8]">© {{ year }} Zair Bulos</p>
    </div>

    <!-- Enlaces -->
    <div class="ml-auto">
      <ul class="flex gap-4">
        <li>
          <a href="https://rickandmortyapi.com/" target="_blank">
            <img src="/src/assets/api.svg" alt="brand-api" title="The Rick and Morty API" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ZairBulos" target="_blank">
            <img src="/src/assets/brand-github.svg" alt="brand-github" title="Zair Bulos GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zair-bulos" target="_blank">
            <img src="/src/assets/brand-linkedin.svg" alt="brand-linkedin" title="Zair Bulos LinkedIn"  />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>
