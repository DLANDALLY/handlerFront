import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { take } from 'rxjs';
import { ArticleType } from '../../types/Article/article-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{
  public articles: ArticleType[] = []

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.findFullArticle()
      .pipe(
        take(1)
      ).subscribe((articles: ArticleType[]) => {
        this.articles = articles
        this.articles.sort((a1: ArticleType, a2: ArticleType) => a1.id! - a2.id!)
      })
  }

}
