import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "pokemon-wiki";
	theme = "dark";
	changeTheme() {
		if (this.theme === "dark") {
			this.theme = "light";
		} else {
			this.theme = "dark";
		}
	}
}
