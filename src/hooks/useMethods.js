import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const useMethods = () => {
  const [items, setItems] = useState([]);

  const addItem = async (item) => {
    await addDoc(collection(db, "tasks"), item);
  };

  useEffect(() => {
    const getItem = () => {
      const refCollection = collection(db, "tasks");
      const q = query(refCollection);
      try {
        onSnapshot(q, (querySnapshot) => {
          setItems(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        });
      } catch (error) {
        console.log(error);
      }
    };

    getItem();
  }, []);

  const deleted = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const edit = async (id, editItem) => {
    await updateDoc(doc(db, "tasks", id), editItem);
  };

  const editStateCheck = async (id, editItemCheck) => {
    await updateDoc(doc(db, "tasks", id), editItemCheck);
  };

  return { addItem, items, setItems, deleted, editStateCheck, edit };
};
