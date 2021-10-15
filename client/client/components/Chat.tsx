import { useEffect, useRef, useState } from "react"
import { useSocket } from "../contexts/SocketContext"

interface ChatProps { }

export const Chat = (props: ChatProps) => {
    
    const loginRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    const {socket, setSocket} = useSocket()

    const [text, setText] = useState<string | null>(null)
    
    useEffect(() => {
        socket?.on('all', (msg) => {

            console.log(msg)
            setText(msg.message)
        })
    }, [socket])

    const onSend = () => {

        const value = loginRef.current?.value

        socket?.emit('all', {message: value}, (msg: any) => {

            console.log(msg)

        })
    }

    return (
        <div>
            <input ref={loginRef} />
            <div style={{height: '5vh', width: '5vh'}}>
                {text}
            </div>
            <button>
                Login
            </button>
            <button onClick={onSend}>
                Send
            </button>                
        </div>
    )
}
