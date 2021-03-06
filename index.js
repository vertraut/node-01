const argv = require("yargs").argv;

const apiContacts = require("./contacts.js");

// const

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      apiContacts.listContacts();
      break;

    case "get":
      apiContacts.getContactById(id);
      break;

    case "add":
      apiContacts.addContact(name, email, phone);
      break;

    case "remove":
      apiContacts.removeContact(id);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
