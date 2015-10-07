import {bootstrap, Component, View} from "angular2/angular2";

@Component({
    selector:'app'
})
@View({
    template: `
        <div>My first Angular 2 App</div>
    `
})
class App{}

bootstrap(App);