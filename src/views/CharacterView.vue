<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { findCharacterById } from '../services/apiService';

const route = useRoute();
const character = ref();
let createdDate;

const getCharacter = async (id) => {
  try {
    const data = await findCharacterById(id);
    character.value = data;

    const created = new Date(data.created);
    createdDate = created.getDate().toString().padStart(2, '0') + '/' + (created.getMonth() + 1).toString().padStart(2, '0') + '/' + created.getFullYear();
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  const id = route.params.id;
  await getCharacter(id);
});
</script>

<template>
  <section v-if="character" class="flex justify-center items-center md:min-h-screen">
    <article class="flex flex-col rounded-md border-2 border-[#9fded5] md:flex-row md:min-w-max">
      <img 
        :src="character.image" 
        :alt="character.name" 
        :title="`${character.name}, Rick and Morty`"
        aria-label="Character image" 
        role="img"
      />

      <div class="p-4">
        <h2 class="text-4xl font-bold mb-6">
          {{ character.name }}
        </h2>

        <ul class="space-y-2 capitalize">
          <li>
            <span class="text-[#d5c8b8]">Status:</span>
            {{ character.status }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Species:</span>
            {{ character.species }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Gender:</span>
            {{ character.gender }} {{ character.gender === 'Male' ? '♂' : character.gender === 'Female' ? '♀' : '' }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Created:</span>
            {{ createdDate }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Number of episodes:</span>
            {{ character.episode.length }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Origin:</span>
            {{ character.origin.name }}
          </li>
          <li>
            <span class="text-[#d5c8b8]">Last known location:</span>
            {{ character.location.name }}
          </li>
        </ul>
      </div>
    </article>
  </section>

  <section v-else class="text-center">
    <p class="text-lg text-[#70592d]">Loading...</p>
  </section>
</template>

<style scoped></style>
