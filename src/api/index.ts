import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Task } from "../components/Task/types";
import { db } from "../firebase";

async function apiRequest(method: string, url: string, body: {}) {
  const response = await fetch(url, { method, body: JSON.stringify(body) });
  const data = await response.json();
  return data;
}

const tasksCollectionRef = collection(db, "tasks");

const createTask = async (task: Task) => {
 return await addDoc(tasksCollectionRef, task);
 
};

const updateTask = async (id: string, task: Task) => {
  const userDoc = doc(db, "tasks", id);
  const newFields = { ...task };
  await updateDoc(userDoc, newFields);
};

const deleteTask = async (id: string) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};

const getTasks = async () => {
  const data = await getDocs(tasksCollectionRef);
  return data.docs.map(doc => ({id: doc.id, ...doc.data()} as Task))
};


export {
    createTask,
    updateTask,
    deleteTask,
    getTasks
}