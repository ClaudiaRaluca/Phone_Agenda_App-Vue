class ContactItem {

    constructor(name, phone) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.phone = phone;
    }

    static fromJSON (json) {
        let CONTACT_ITEM = new ContactItem();
        CONTACT_ITEM.id = json.id;
        CONTACT_ITEM.name = json.name;
        CONTACT_ITEM.phone = json.phone;

        return CONTACT_ITEM;
    }
}

export default ContactItem;