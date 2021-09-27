export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей при их наличии
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
          this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('formula', data => console.log('Sub:', data))
// emitter.emit('formula:erase', 36)
//
// setTimeout(() => {
//   emitter.emit('formula', 'After 1 seconds')
// }, 1000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('formula', 'After 4 seconds')
// }, 4000)
