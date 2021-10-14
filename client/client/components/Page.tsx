import { ReactNode } from "react";

interface PageProps {
    children: ReactNode
}

export const Page = ({ children }: PageProps): JSX.Element => {
    return (
        <div style={{
            padding: '0',
            margin: '0',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {children}
        </div>
    )
}