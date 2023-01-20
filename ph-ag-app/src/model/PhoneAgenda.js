import ContactItem from "./Contact";

class PhoneAgenda {
    
    constructor() {
        this.contacts = this.loadLocalStorage();
    }

    addContact(contact) {
        this.contacts.push(contact);
        this.saveSaveLocalStorage();
    }

    deleteContact(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveSaveLocalStorage();
    }

    saveSaveLocalStorage() {
        localStorage.setItem("current-list", JSON.stringify(this.contacts));
    }

    loadLocalStorage() {

        let json = localStorage.getItem("current-list");

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json);

        if (jsonParsed.length === 0)
            return [];

        let CONTACT_LIST = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            CONTACT_LIST.push(ContactItem.fromJSON(jsonParsed[i]));
        }

        return CONTACT_LIST;
    }

}

export default PhoneAgenda;