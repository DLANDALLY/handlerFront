import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./component/article/article.component";
import { SidnavComponent } from './component/sidnav/sidnav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ArticleComponent, SidnavComponent]
})
export class AppComponent {
  title = 'handlerFront';
}
