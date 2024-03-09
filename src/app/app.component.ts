import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
=======
import { HeaderComponent } from "./component/header/header.component";
import { SidenavComponent } from "./component/sidenav/sidenav.component";
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ HeaderComponent, SidenavComponent, RouterOutlet, ArticleComponent]
>>>>>>> 22438dd (save)
})
export class AppComponent {
  title = 'handlerFront';
}
