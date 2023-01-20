<template>
    <div>
        <contact-template v-for="(contact) in phoneagenda.contacts" v-bind:key="contact.id" v-bind:contact="contact"
            @delete-contact="deleteContacts(contact)"></contact-template>
    </div>
</template>

<script>

import ContactTemplate from "./ContactTemplate";

export default {
    name: "ContactList",

    props: ["phoneagenda"],

    data: function () {
        return {
            contacts: []
        }
    },

    components: {
        "contact-template": ContactTemplate
    },
    
    methods: {
        deleteContacts: function (contact) {
            this.phoneagenda.deleteContact(contact);
        }
    }
};

</script>

<style scoped>

</style>