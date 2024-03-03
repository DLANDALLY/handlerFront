import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ArticleType } from '../types/Article/article-type';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly endPoint: string = `${environment.apiRootUri}article`

  constructor(private _httpclient: HttpClient) { }

  public findFullArticle(): Observable<ArticleType[]> {
    return this._httpclient.get<ArticleType[]>(
      this.endPoint
    )
  }
}
