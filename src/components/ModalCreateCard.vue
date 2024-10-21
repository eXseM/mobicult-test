<script setup>
import { ref } from "vue";
import store from "@/store";

let text = ref(null);
let dialog = ref(false);
let errorShow = ref(false);
let card = ref(null);

function createCard() {
  const newCard = {
    id: Date.now(),
    text: text.value,
  };
  console.log(text);
  if (!text.value) {
    errorShow.value = true;
  } else {
    store.commit("createCard", newCard);

    text.value = null;
    errorShow.value = false;
    dialog.value = false;
  }
}
function updateCard() {
  card.value.text = text.value;
  store.commit("updateCard", card);

  dialog.value = false;
}

const openDialog = () => {
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
  text.value = null;
  errorShow.value = false;
  card.value = null;
};

defineExpose({
  openDialog,
  dialog,
  text,
  card,
});
</script>

<template>
  <v-dialog max-width="500" v-model="dialog" persistent>
    <template v-slot:activator>
      <div class="d-flex flex-row align-center justify-end">
        <v-btn
          @click="openDialog"
          color="deep-purple"
          text="Создать карточку"
          variant="flat"
          class="mb-4"
        />
      </div>
    </template>

    <template v-slot:default>
      <v-card title="Dialog">
        <v-card-text>
          <label class="text-red" v-show="errorShow">Заполните поле</label>
          <v-text-field label="Текст карточки" v-model="text" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Закрыть" @click="closeDialog()" />
          <v-btn
            text="Обновить"
            color="purple"
            @click="updateCard"
            v-if="card"
          />
          <v-btn text="Соханить" color="green" @click="createCard" v-else />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
