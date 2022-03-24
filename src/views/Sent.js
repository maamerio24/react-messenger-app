import React, { useContext } from 'react'
import { SentMessageList } from '../components/SentMessageList'
import { SentDataContext } from '../contexts/SentProvider'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '../contexts/AuthProvider'

export const Sent = () => {
    const { currentUser } = useAuth()
    const { SentMessages, setSentMessage, addSentMessage } = useContext(SentDataContext)
    const db = getFirestore()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = {
            body: e.target.status.value,
            dateCreated: serverTimestamp(),
        }

        addSentMessage(formData)

        e.target.status.value = ''
    }
    return (
        <React.Fragment>
            {
                currentUser.loggedIn
                    ?

                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                            <div className="col-10">
                                <div className="form-group">
                                    <input type="text" className="form-control mt-3" name='status' placeholder='Message' />
                                </div>
                            </div>
                            <div className="col-2">
                                <input type="submit" value="Send" className='btn btn-info btn-block mt-3' />
                            </div>
                        </div>
                    </form>
                    : null
            }

            <hr />
            {
                currentUser.loggedIn
                    ?

                    <div className="row">
                        <div className="col-12">
                            <ul className="list-group">
                                <SentMessageList SentMessages={ SentMessages } />
                            </ul>
                        </div>
                    </div>
                    : null
            }
        </React.Fragment>

    )
}

        