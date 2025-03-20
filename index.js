import { program } from "commander";
import {listContacts, getContactById, removeContact, addContact} from "./contacts.js"
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const result = await listContacts()
      console.log(result)
      break;

    case "get":
      const resultGet = await getContactById(id)
      console.log(resultGet)
      break;

    case "add":
      const resultAdd = await addContact(name, email, phone)
      console.log(resultAdd)
      break;

    case "remove":
      const resultRemove = await removeContact(id)
      console.log(resultRemove)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
