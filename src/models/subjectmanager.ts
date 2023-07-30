import { Subject } from 'rxjs';

export class SubjectManager<T> { // * T is the type of the subject
    private subject = new Subject<T>();
    get getSubject() {
        // si alguien esta obteniendo el subject, no va a poder emitir datos por el mismo
        return this.subject.asObservable();
    }
    set setSubject(value: T) {
        // controlamos qe es lo qe viaja por nuestro subject
        this.subject.next(value);
    }
}
