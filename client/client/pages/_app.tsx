import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SocketContextProvider } from '../contexts/SocketContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketContextProvider>
      <Component {...pageProps} />
    </SocketContextProvider>
  )
}
export default MyApp
