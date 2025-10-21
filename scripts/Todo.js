export class Todo {
    constructor(title, details, insertContainer) {
        this.title = title;
        this.details = details;
        this.subTodos = [];
    }
}
