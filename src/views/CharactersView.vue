<script setup>
import { findCharacters } from '../services/apiService';
import Character from '../components/Character.vue';
import { ref, onMounted } from 'vue';

const characters = ref([]);
const currentPage = ref(1);
let totalPages = null;

const getCharacters = async () => {
  try {
    const { info, results } = await findCharacters(currentPage.value);
    characters.value = results;
    totalPages = info.pages;
  } catch (error) {
    console.log(error);
  }
};

const loadNextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await getCharacters();
  }
};

const loadPreviousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await getCharacters();
  }
};

onMounted(async () => {
  await getCharacters();
});
</script>

<!-- <script>
import { findCharacters } from '../services/apiService';
import Character from '../components/Character.vue';

export default {
  components: {
    Character
  },
  data() {
    return {
      characters: [],
      currentPage: 1,
      totalPages: null
    }
  },
  async mounted() {
    await this.getCharacters();
  },
  methods: {
    async getCharacters() {
      try {
        const { info, results } = await findCharacters(this.currentPage);
        this.characters = results;
        this.totalPages = info.pages;
      } catch (error) {
        console.log(error);
      }
    },
    async loadNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.getCharacters();
      }
    },
    async loadPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.getCharacters();
      }
    }
  }
}
</script> -->

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 justify-center items-center">
    <Character v-for="character in characters" :key="character.id" :character="character" />
  </div>

  <div class="flex gap-8 justify-center items-center p-4">
    <button @click="loadPreviousPage" :disabled="currentPage <= 1" class="rounded-md py-2 px-3 bg-[#70592d] hover:bg-[#8d7a4a]">
      Previous
    </button>
    <button @click="loadNextPage" :disabled="currentPage >= totalPages" class="rounded-md py-2 px-3 bg-[#70592d] hover:bg-[#8d7a4a]">
      Next
    </button>
  </div>
</template>

<style scoped></style>
