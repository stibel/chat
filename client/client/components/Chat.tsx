import { useEffect, useRef, useState } from "react"
import { useSocket } from "../contexts/SocketContext"

interface ChatProps { }

export const Chat = (props: ChatProps) => {

    const loginRef = useRef<HTMLInputElement>(null)

    const { socket, setSocket } = useSocket()

    const [messages, setMessages] = useState<Array<{ message: string, time: Date, id: number }>>([])

    let id = 0;

    useEffect(() => {
        socket?.on('all', (msg) => {
            const { message, time } = msg
            setMessages(prevState => [...prevState, { message: message, time: time.toLocaleString(), id: ++id }])
        })
    }, [socket])

    useEffect(() => console.log(messages), [messages]);

    const onSend = () => {

        const value = loginRef.current?.value

        socket?.emit('all', { message: value, time: new Date() }, (msg: any) => console.log(msg))
    }

    return (
        <div>
            <div style={{ height: '90vh', width: '100vw', overflowY: 'scroll' }}>
                {messages?.map(message => <div key={message.id}>{message.message} {message.time}</div>)}
            </div>
            <input ref={loginRef} />
            <button>
                Login
            </button>
            <button onClick={onSend}>
                Send
            </button>
        </div>
    )
}
