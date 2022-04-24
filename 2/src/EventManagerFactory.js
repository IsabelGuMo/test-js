import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        let eventObjects = [];
        const validEvents = events.filter(event => types.includes(event.type));
        
        for (const validEvent of validEvents) {
            eventObjects.push(
                new Event(validEvent.second, validEvent.type, validEvent.message)
            );
        }
        
        return new EventManager(eventObjects);  
    }
};