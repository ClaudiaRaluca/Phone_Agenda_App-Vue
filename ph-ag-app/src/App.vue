<template>
  <div id="app-container">

    <agenda-header></agenda-header>

    <agenda-body :phoneagenda="phoneAgenda"></agenda-body>

    <add-window v-show="window" @close-window="hideWindow" @add-contact="addContacts"></add-window>

    <agenda-footer @show-window="displayWindow"></agenda-footer>

  </div>
</template>

<script>

import AgendaHeader from "./components/Header";
import AgendaBody from "./components/Body";
import AddWindow from "./components/AddWindow";
import AgendaFooter from "./components/Footer";
import PhoneAgenda from "./model/PhoneAgenda";
import ContactItem from "./model/Contact";

export default {
  name: "App",

  components: {
    "agenda-header": AgendaHeader,
    "agenda-body": AgendaBody,
    "add-window": AddWindow,
    "agenda-footer": AgendaFooter
  },

  data: function () {
    return {
      window: false,
      phoneAgenda: new PhoneAgenda()
    }
  },

  methods: {
    displayWindow: function () {
      this.window = true;
    },

    hideWindow: function () {
      this.window = false;
    },

    addContacts: function ({ name, phone }) {
      let contact = new ContactItem(name, phone);
      this.phoneAgenda.addContact(contact);
      this.window = false;
    }
  }
};

</script>

<style>
body {
  background-image: url(./assets/bg.png);
  background-size: cover;
  height: 90vh;
  margin: 0;
  box-sizing: border-box;
  background-repeat: no-repeat;
  font-family: 'Nunito', sans-serif;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
}

#app-container {
  width: 450px;
  max-width: 450px;
  margin: 50px auto;
  height: 90vh;
  border-radius: 15px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
