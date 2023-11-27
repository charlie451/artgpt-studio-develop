class Socket {
  constructor() {
    
    this.socket = null
  }

  connect(url) {
    if (!this.socket) {
      this.socket = new WebSocket(url)
      console.log('this.socket', this.socket )
      console.log('connect')
      console.log('url', url)
    }
  }

  disconnect() {
    console.log('disconnect')
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  send(message) {
    console.log(message)
    if (this.socket) {
      console.log(this.socket)
      this.socket.send(JSON.stringify(message))
    }
  }

  on(eventName, callback) {
    console.log('eventName', eventName)
    if (this.socket) {
      this.socket.addEventListener(eventName, callback)
    }
  }
}

export { Socket }
