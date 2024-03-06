import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { SidenavComponent } from "./component/sidenav/sidenav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ HeaderComponent, SidenavComponent]
})
export class AppComponent {
  title = 'handlerFront';
}
