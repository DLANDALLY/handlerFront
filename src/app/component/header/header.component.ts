import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [MatToolbarModule, MatIconModule, MatButtonModule, SidenavComponent]
})
export class HeaderComponent {

}
