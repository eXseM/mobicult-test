<script setup>
const links = [
  { name: "Главная", route: "/" },
  { name: "Настройки", route: "/settings" },
];
</script>

<template>
  <v-app-bar>
    <v-container fluid>
      <v-btn v-for="link in links" :key="link.route" :text="link.name" :to="link.route" />
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
