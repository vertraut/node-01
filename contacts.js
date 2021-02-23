const shortID = require("shortid");
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
    console.log(`Контакт с ID ${contactId} не найден!`);
  });
}

function removeContact(contactId) {
  fetchContacts().then((data) => {
    const newArray = data.filter((item) => item.id !== contactId);
    if (newArray.length === data.length) {
      console.log(`Контакт с ID ${contactId} не найден!`);
      return;
    }
    wtiteToFile(newArray);
  });
}

function addContact(name, email, phone) {
  fetchContacts().then((data) => {
    data.push({
      id: shortID(),
      name,
      email,
      phone,
    });
    wtiteToFile(data);
  });
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

function wtiteToFile(data) {
  fs.writeFile(contactsPath, JSON.stringify(data))
    .then(() => {
      console.table(data);
      console.log("База данных обновлена");
    })
    .catch((e) => console.log(e.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
