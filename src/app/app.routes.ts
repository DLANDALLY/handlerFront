import { Routes } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { AddArticleComponent } from './component/article/add-article/add-article.component';

export const routes: Routes = [
    { path: 'article', component: ArticleComponent, children: [
        { path: 'add', component: AddArticleComponent },
    ]},
    { path: '', redirectTo: '/article', pathMatch: 'full' },
];
