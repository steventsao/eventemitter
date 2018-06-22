class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  addListener(key, callback) {
    let listeners = this.listeners.has(key) ? this.listeners.get(key) : [];
    listeners.push(callback);
    this.listeners.set(key, listeners);
    return true;
  }
  removeListener(key, callback) {
    let listeners = this.listeners.get(key);
    let targetIndex;
    if (listeners && listeners.length) {
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i] === callback) {
          targetIndex = i;
        }
      }
    } else {
      return false;
    }
    // If listener is not found
    if (targetIndex === undefined) {
      return false;
    } else {
      // O(1) deletion
      let tempListener = listeners[listeners.length - 1];
      listeners[targetIndex] = tempListener;
      listeners.pop();
      return true;
    }
  }
  emit(key, ...args) {
    let listener = this.listeners.get(key);
    if (listener !== undefined) {
      listener.forEach(cb => cb(...args));
    }
  }
}

module.exports = EventEmitter;
