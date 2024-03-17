import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ HeaderComponent, RouterOutlet, ArticleComponent]
})
export class AppComponent {
  title = 'handlerFront';
}
