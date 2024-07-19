function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function(typename, callback) {
    if (!this.events[typename]) {
        this.events[typename] = [];
    }
    this.events[typename].push(callback);
};

EventEmitter.prototype.off = function(typename, callback) {
    if (!this.events[typename]) return;
    const index = this.events[typename].indexOf(callback);
    if (index !== -1) {
        this.events[typename].splice(index, 1);
    }
};

EventEmitter.prototype.emit = function(typename, ...args) {
    if (!this.events[typename]) return;
    this.events[typename].forEach(callback => callback.apply(this, args));
};

// Example usage:
const emitter = new EventEmitter();

function onFoo(data) {
    console.log('foo event received:', data);
}

emitter.on('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // Logs: foo event received: { some: 'data' }

emitter.off('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // No log, as the callback has been removed
