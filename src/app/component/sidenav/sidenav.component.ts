import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ArticleComponent } from "../article/article.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    imports: [MatSidenavModule, ArticleComponent, RouterOutlet]
})
export class SidenavComponent {

}
