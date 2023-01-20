<template>
    <div id="app-body">
          <contact-list v-bind:phoneagenda="phoneagenda"></contact-list>
    </div>
  </template>

<script>

import ContactList from "./ContactList";

export default {
  name: "AgendaBody",

  props: ["phoneagenda"],

  components: {
    "contact-list": ContactList
  }
};
</script>

<style scoped>
#app-body {
    display: flex;
    flex-direction: column;
    height: 74vh;
    max-height: 74vh;
    overflow-y: scroll;
}
</style> 