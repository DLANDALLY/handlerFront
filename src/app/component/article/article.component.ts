import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { take } from 'rxjs';
import { ArticleType } from '../../types/Article/article-type';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddArticleComponent } from './dialog-add-article/dialog-add-article.component';

@Component({
    selector: 'app-article',
    standalone: true,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    imports: [
      CommonModule, 
      MatCardModule, 
      MatButtonModule, 
      MatIconModule, 
      MatTableModule, 
      RouterOutlet, 
      MatDialogModule
    ]
})
export class ArticleComponent implements OnInit{
  public articles: ArticleType[] = []
  public article!: ArticleType

  constructor(
    public dialog: MatDialog,
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

  openDialog(): void {
    this.dialog
    .open(DialogAddArticleComponent, {
      height: 'flex',
      width: 'flex',
      data: {
        object: this.article
      },
    })
    .afterClosed()
    .subscribe((result: ArticleType) => {
      if (result){
        this.articles.push(result)
      }
    });
  }

}
