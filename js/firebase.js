
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore,collection,addDoc,getDocs,deleteDoc,onSnapshot,doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"



const firebaseConfig = {
  apiKey: "AIzaSyDrOlsiLsCyIXTjewKn0Ezh6sZH7O00Bs0",
  authDomain: "fir-2188a.firebaseapp.com",
  projectId: "fir-2188a",
  storageBucket: "fir-2188a.appspot.com",
  messagingSenderId: "943725922057",
  appId: "1:943725922057:web:fd2da9cc1e7051d9d135d8"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * 
 * @param {string} title 
 * @param {string} description 
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
