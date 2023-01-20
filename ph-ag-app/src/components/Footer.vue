<template>
    <footer>
        <img id="add" src="../assets/add.png" alt="Add Button" @click="showWindow">
    </footer>
  </template>

<script>

export default {
  name: "AgendaFooter",
  emits: ["show-window"],
  methods: {
    showWindow: function() {
      this.$emit("show-window");
    }
  }
};

</script>

<style>

footer {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 8vh;
  max-height: 8vh;
  border-top: 1px solid #a3a5a8;
  margin-top: auto;
}

#add {
  width: 50px;
  height: 50px;
  padding-right: 20px;
  filter: invert(67%) sepia(22%) saturate(2913%) hue-rotate(173deg) brightness(96%) contrast(90%);
}

#add:hover {
  filter: invert(28%) sepia(99%) saturate(1341%) hue-rotate(179deg) brightness(93%) contrast(87%);
  cursor: pointer;
}

</style>