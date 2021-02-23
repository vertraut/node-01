const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fetchContacts().then((data) => console.table(data));
}

function getContactById(contactId) {
  fetchContacts().then((data) => {
    const searchResult = data.find((item) => item.id === contactId);
    if (searchResult) {
      console.table(searchResult);
      return;
    }
    console.log("Контакт с таким ID не найден!");
  });
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

function fetchContacts() {
  return fs
    .readFile(contactsPath)
    .then((data) => {
      const string = data.toString();
      return JSON.parse(string);
    })
    .catch((error) => console.log(error.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
