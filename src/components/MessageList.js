import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import { Message } from './Message'


export const MessageList = (props) => {

    const { messages } = useContext(DataContext)

    return (
        <React.Fragment>
            {messages.map(p => <Message message={p} key={p.id} />)}
        </React.Fragment>
    )
}