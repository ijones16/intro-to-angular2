import {bootstrap, Component, View} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";

@Component({
    selector:'app'
})
@View({
    directives: [TodoInput],
    template: `
        <div><todo-input></todo-input></div>
    `
})
class App{}

bootstrap(App, [TodoService]);