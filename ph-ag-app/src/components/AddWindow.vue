<template>
    <div id="add-container">
        <div id="close-container">
            <img id="close" src="../assets/close.png" alt="Close Button" @click="closeWindow">
        </div>

        <div>
            <label for="name" style="margin-top: 100px"><b>Name:</b></label>
            <input type="text" id="name" v-model="name">
        </div>

        <div>
            <label for="phone" style="margin-top: 30px"><b>Phone Number:</b></label>
            <input type="tel" id="phone" v-model="phone">
        </div>

        <div>
            <p id="add-contact" v-on:click="add">Save</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddWindow',

    emits: ["close-window", "add-contact", "body-freeze"],
    
    data: function () {
        return {
            name: "",
            phone: ""
        }
    },

    methods: {
        closeWindow: function () {
            this.$emit("close-window");
            this.name = "";
            this.phone = "";
        },
        add: function () {
            if (this.name !== '' && /^\d+$/.test(this.phone) == true) {
                this.$emit("add-contact", { name: this.name, phone: this.phone });
                this.name = "";
                this.phone = "";
            }
        }
    }

};

</script>

<style>
#add-container {
    position: absolute;
    z-index: 1;
    width: 450px;
    max-width: 450px;
    height: 90vh;
    max-height: 90vh;
    border: 2px solid #1174ad;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;
    background: white;
    
}

input {
    font-family: 'Nunito', sans-serif;
    font-size: large;
}

#close-container {
    align-self: flex-end;
}

#close {
    width: 40px;
    height: 40px;
    margin: 10px 10px 0 0;
    filter: invert(69%) sepia(6%) saturate(134%) hue-rotate(177deg) brightness(94%) contrast(91%);
    opacity: 50%;
}

#close:hover {
    opacity: 60%;
    cursor: pointer;
    opacity: 100%;
}

label,
input {
    display: block;
    height: 30px;
}

input {
    border: 2px solid #a3a5a8;
}

#add-contact {
    color: white;
    width: 60px;
    height: 30px;
    background-color: #1174ad;
    border-radius: 4px;
    font-size: larger;
    text-align: center;
    padding: 5px 0 0 0;
    margin-top: 50px;
}

#add-contact:hover {
    cursor: pointer;
    opacity: 100%;
    font-weight: bold;
}
</style>