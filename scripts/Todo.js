export class Todo {
    constructor(title, details, insertContainer) {
        this.title = title;
        this.details = details;
        this.subTodos = [];

        this.element = document.createElement("div");
        this.element.classList.add("task");
        this.element.title = "Drag to change order";
        this.element.innerHTML = `<input type="checkbox" title="Mark as done" />
                                  <h3>${title}</h3>
                                  <p>
                                      ${details}
                                  </p>
                                  <div class="btns-container">
                                      <button class="button-round btn-details">&#128462; Details</button>
                                      <button class="button-round btn-delete">&#128462; Delete</button>
                                  </div>`;

        insertContainer.insertAdjacentElement("afterbegin", this.element);
    }
}
