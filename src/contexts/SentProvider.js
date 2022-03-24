import { getDocs, getDoc, getFirestore, query, collectionGroup } from "firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { firebaseApp } from '../firebase/config';

export const SentDataContext = createContext()

export const SentDataProvider = (props) => {

    const [SentMessages, setSentMessages] = useState([])

    const db = getFirestore()

    const getSentMessages = useCallback(
        async () => {
            const q = query(collectionGroup(db, 'SentMessages'))

            const querySnapshot = await getDocs(q)

            let newSentMessages = [];
            querySnapshot.forEach(async doc => {
                const userRef = await getDoc(doc.ref.parent.parent);
                console.log(userRef.data())

                newSentMessages.push({
                    id: doc.id,
                    ...doc.data(),
                    user: { ...userRef.data() }
                })
                setSentMessages(newSentMessages)
            })


            return querySnapshot;
        },
        [db],
    )


    useEffect(() => {
        getSentMessages()
    }, [getSentMessages])

    useEffect(() => {
        console.log(firebaseApp)
    }, [])



    const sentValues = {
        SentMessages, setSentMessages
    }

    return (
        <SentDataContext.Provider value={sentValues} >
            {props.children}
        </SentDataContext.Provider>
    )
}

