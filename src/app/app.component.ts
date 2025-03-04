import { Component } from "@angular/core";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentAreaComponent } from "./components/content-area/content-area.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ContentAreaComponent, SidebarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Rob Kazirut Profile";

  selected: string = "about";
}
