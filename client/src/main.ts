import ws from 'ws'

const client = new ws('ws://localhost:3000');

client.on('open', () => client.send('Hello'));