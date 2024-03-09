import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ArticleComponent } from "../article/article.component";
import { RouterOutlet } from '@angular/router';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { provideRouter } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    imports: [
        MatSidenavModule, 
        ArticleComponent, 
        RouterOutlet, 
        MatBottomSheetModule, 
        MatListModule, MatMenuModule, MatIconModule]
})
export class SidenavComponent {

}
