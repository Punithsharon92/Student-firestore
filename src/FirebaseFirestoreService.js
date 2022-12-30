import db from "./FirebaseConfig";
import { setDoc, addDoc, getDoc, doc, collection } from "firebase/firestore";

const createDocument = (collnName, document, id) => {
  // adding document to the collection in db without custom ID
  // return addDoc(collection(db, collnName), document);

  // adding document to the collection in db with custom ID
  return setDoc(doc(db, collnName, id), document);
};

const readDocument = (collnName, id) => {
  const docRef = doc(db, collnName, id);
  return getDoc(docRef);
};

const FirebaseFirestoreServices = {
  createDocument,
  readDocument,
};

export default FirebaseFirestoreServices;
