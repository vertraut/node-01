const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
  console.log(contactsPath);
  fs.readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      const array = JSON.parse(string);
      console.table(array);
    })
    .catch((error) => console.log(error.message));
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
