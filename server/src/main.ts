import { httpModule } from './http/http.module';
import { socketModule } from './socket/socket.module';


const bootstrap = () => {
    const { app, server } = httpModule()

    const { io } = socketModule(server)
}

bootstrap()