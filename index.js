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
      // ... name email phone

      console.log(
        `->add contact with name - ${name}, email - ${email}, phone - ${phone}`
      );

      break;

    case "remove":
      // ... id
      console.log(`->remove contact with id ${id}`);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
