import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        SidenavComponent, 
        CommonModule, 
        MatMenuModule,
        RouterOutlet
    ]
})
export class HeaderComponent {
    
}
