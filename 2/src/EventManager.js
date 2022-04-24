export default class EventManager{
    constructor(events) {
        this.events = events;
    }
    
    run() {
       for (const event of this.events) {
           setTimeout(
               () => event.execute(),
               event.second * 1000
            );
       }

    }
};