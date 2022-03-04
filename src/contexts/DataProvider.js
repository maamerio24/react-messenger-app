import { collection, getDocs, getDoc, getFirestore, query, collectionGroup } from "firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { firebaseApp } from '../firebase/config';

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [messages, setMessages] = useState([])

    const db = getFirestore()

    const getMessages = useCallback(
        async () => {
            const q = query(collectionGroup(db, 'messages'))

            const querySnapshot = await getDocs(q)

            let newMessages = [];
            querySnapshot.forEach(async doc => {
                const userRef = await getDoc(doc.ref.parent.parent);
                console.log(userRef.data())

                newMessages.push({
                    id: doc.id,
                    ...doc.data(),
                    user: { ...userRef.data() }
                })
                setMessages(newMessages)
            })


            return querySnapshot;
        },
        [db],
    )


    useEffect(() => {
        getMessages()
    }, [getMessages])

    useEffect(() => {
        console.log(firebaseApp) 
    }, [])



    const values = {
        messages, setMessages
    }

    return (
        <DataContext.Provider value={values} >
            {props.children}
        </DataContext.Provider>
    )
}

