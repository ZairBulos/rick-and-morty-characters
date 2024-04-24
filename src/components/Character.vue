<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  character: {
    type: Object,
    required: true 
  }
});

const statusIconClass = computed(() => {
  return {
    'status-icon': true,
    'status-icon-alive': props.character.status === 'Alive',
    'status-icon-dead': props.character.status === 'Dead',
    'status-icon-unknown': props.character.status === 'unknown'
  };
});
</script>

<!-- <script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusIconClass() {
      return {
        'status-icon': true,
        'status-icon-alive': this.character.status === 'Alive',
        'status-icon-dead': this.character.status === 'Dead',
        'status-icon-unknown': this.character.status === 'unknown'
      };
    }
  }
};
</script> -->

<template>
  <article role="listitem" class="flex flex-col lg:flex-row border-2 border-[#9fded5] rounded-lg overflow-hidden">
    <!-- Imagen -->
    <div class="lg:w-1/3">
      <img 
        :src="character.image" 
        :alt="character.name" 
        :title="`${character.name}, Rick and Morty`"
        class="w-full h-auto lg:h-full" 
      />
    </div>

    <!-- Información -->
    <div class="p-4 lg:w-2/3">
      <div class="mb-4">
        <h2 class="text-xl font-bold hover:text-[#d5c8b8] hover:cursor-pointer">
          <router-link :to="{ path: `/character/${character.id}` }">{{ character.name }}</router-link>
        </h2>
        <p class="flex items-center capitalize">
          <span :class="statusIconClass"></span>
          {{ character.status }} - {{ character.species }} {{ character.gender === 'Male' ? '♂' : character.gender === 'Female' ? '♀' : '' }}
        </p>
      </div>

      <div class="mb-2">
        <p class="text-[#d5c8b8]">Origin:</p>
        <p class="capitalize">{{ character.origin.name }}</p>
      </div>

      <div>
        <p class="text-[#d5c8b8]">Last known location:</p>
        <p>{{ character.location.name }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.status-icon {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.375rem;
  border-radius: 50%;
}

.status-icon-alive {
  background-color: rgb(85, 204, 68);
}

.status-icon-dead  {
  background-color: rgb(214, 61, 46);
}

.status-icon-unknown {
  background-color: rgb(158, 158, 158);
}
</style>
