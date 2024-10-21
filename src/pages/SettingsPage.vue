<script setup>
import { ref } from "vue";
import store from "@/store";

const editData = ref(null);

function editCard(card) {
  editData.value.openDialog();
  editData.value.text = card.text;
  editData.value.card = card;
}
function removeCard(idx) {
  store.commit("removeCard", idx);
}
</script>

<template>
  <cards-list>
    <template #button>
      <modal-create-card ref="editData" />
    </template>
    <template #actions="{ index, card }">
      <v-card-actions>
        <v-btn @click="editCard(card)">Редактировать</v-btn>
        <v-btn @click="removeCard(index)">Удалить</v-btn>
      </v-card-actions>
    </template>
  </cards-list>
</template>
