<script setup>
import store from "@/store";
</script>

<template>
  <slot name="button"></slot>
  <v-sheet min-height="85vh" rounded="lg">
    <v-row no-gutters>
      <v-card
        variant="tonal"
        v-for="(card, idx) in store.getters.getCardsList"
        :key="idx"
        class="mb-4 mt-4 mx-auto d-flex flex-column align-center justify-end"
        min-height="300px"
        max-height="300px"
        min-width="300px"
        max-width="300px"
      >
        <v-card-text class="d-flex align-center">
          <p>{{ card.text }}</p>
        </v-card-text>
        <slot name="actions" :index="idx" :card="card" />
      </v-card>
    </v-row>
  </v-sheet>
</template>
