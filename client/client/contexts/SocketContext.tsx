import { createContext, Dispatch, ReactNode, ReactPropTypes, SetStateAction, useEffect, useState } from "react";
import { io, Socket } from 'socket.io-client'
import useCustomContext from "../hooks/useCustomContext";

interface SocketContextType {
    socket: Socket | null,
    setSocket: Dispatch<SetStateAction<Socket | null>>
}

const SocketContext = createContext<SocketContextType | null>(null)

export const SocketContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        const s = io('ws://localhost:3000')

        s.on('connect', () => {
            console.log(`Socket connected to server`)
        }) 

        setSocket(s)

    }, [])

    const value = { socket, setSocket }

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => useCustomContext<SocketContextType>(SocketContext)
