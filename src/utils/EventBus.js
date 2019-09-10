class EventBus {
    constructor() {
        this.events = this.events || new Object()
    }
}
EventBus.prototype.emit = function(type, ...args) {
    let e = this.events[type]
    for(var i=0; i<e.length; i++) {
        e[i].apply(this, args)
    }
}
EventBus.prototype.on = function(type, func) {
    this.events[type] = this.events[type] || []
    this.events[type].push(func)
}

const eventbus = new EventBus()
export default eventbus