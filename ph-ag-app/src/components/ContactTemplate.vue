<template>
    <div class="contact">
        <div id="contact-data">
            <div><span><b>{{ contact.name }}</b></span>
            </div>

            <div><span id="contactPhoneN">{{ contact.phone }}</span>
            </div>
        </div>

        <div style="margin-right: 10px;">
            <img @click="del" id="del-btn" src="../assets/del.png" alt="Add Button">
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactTemplate',

    props: ["contact"],

    methods: {
        del: function () {
            this.$emit("delete-contact");
        }
    }
};

</script>

<style scoped>
.contact {
    position: relative;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #a3a5a8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.contact:hover {
    border: 2px solid #1174ad;
}

#del-btn {
    width: 30px;
    height: 30px;
    opacity: 30%;
}

#del-btn:hover {
    cursor: pointer;
    opacity: 80%;
}

#contactPhoneN {
    font-size: smaller;
}
</style>