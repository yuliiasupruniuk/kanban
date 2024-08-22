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

const DOCUMENT_NAME = "tasks";
const COLLECTION_REF = collection(db, DOCUMENT_NAME);

const handleAsyncError = async <T>(
  fn: () => Promise<T>,
  errorMessage: string
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
};

const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  return handleAsyncError(async () => {
    const data = await addDoc(COLLECTION_REF, task);
    return { ...task, id: data.id };
  }, "Failed to create task");
};

const updateTask = async (task: Task): Promise<void> => {
  return handleAsyncError(async () => {
    const taskDocRef = doc(db, DOCUMENT_NAME, task.id);
    await updateDoc(taskDocRef, task);
  }, "Failed to update task");
};

const deleteTask = async (id: string): Promise<void> => {
  return handleAsyncError(async () => {
    const taskDocRef = doc(db, DOCUMENT_NAME, id);
    await deleteDoc(taskDocRef);
  }, "Failed to delete task");
};

const getTasks = async (): Promise<Task[]> => {
  return handleAsyncError(async () => {
    const querySnapshot = await getDocs(COLLECTION_REF);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Task)
    );
  }, "Failed to fetch tasks");
};

export { createTask, updateTask, deleteTask, getTasks };
