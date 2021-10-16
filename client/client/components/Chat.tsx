import { SyntheticEvent, useEffect, useRef, useState } from "react"
import { useSocket } from "../contexts/SocketContext"

interface ChatProps { }

interface Message {
    message: string,
    time: string,
    sender: boolean | null
}

export const Chat = (props: ChatProps) => {

    const loginRef = useRef<HTMLInputElement>(null)

    const { socket, setSocket } = useSocket()

    const [messages, setMessages] = useState<Array<Message>>([])

    useEffect(() => {
        socket?.on('all', (msg) => {
            const { message, time } = msg
            setMessages(prevState => [...prevState, { message: message, time: time.toLocaleString(), sender: null }])
        })
    }, [socket])

    useEffect(() => console.log(messages), [messages]);
    const onSend = () => {

        const value = loginRef.current?.value
        if (value) {
            const message = { message: value, time: new Date().toLocaleString(), sender: true } //in the future check if sender name is the same as username
            setMessages(prevState => [...prevState, message])
            socket?.emit('all', message, (msg: any) => console.log(msg))
            loginRef.current.value = '';
        }
    }

    return (
        <div>
            <div style={{
                padding: 0,
                margin: 0,
                top: 0,
                height: '90vh',
                width: '100vw',
                display: "flex",
                flexFlow: "column",
                alignItems: 'center',
                justifyContent: "center",
                overflowY: 'scroll',
                backgroundColor: 'pink'
            }}>
                {messages?.map(message =>
                    <div
                        key={message.time.toString()}
                        style={{
                            minWidth: '20vw',
                            minHeight: '5vh',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            borderRadius: '5px',
                            marginTop: '5px',
                            backgroundColor: message.sender ? 'white' : 'lightblue'
                        }}
                    >
                        {message.message} {message.time}
                    </div>)}
            </div>
            <div style={{ height: '10vh', width: '100vw', display: "flex", flexFlow: "row" }}>
                <input style={{ width: '90vw' }} ref={loginRef} />
                <button style={{ width: '10vw' }} onClick={onSend}>
                    Send
                </button>
            </div>
        </div>
    )
}
