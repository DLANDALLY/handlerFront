import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormsModule } from '@angular/forms';
import { ArticleType } from '../../../types/Article/article-type';

@Component({
  selector: 'app-dialog-add-article',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './dialog-add-article.component.html',
  styleUrl: './dialog-add-article.component.scss'
})
export class DialogAddArticleComponent {
  public article!: ArticleType
  public nom: string = ""
  public description: string =""
  public prix: Number = 0
  public stock: number = 0
  public photo: string = ""
  

  constructor(
    public dialogRef: MatDialogRef<DialogAddArticleComponent>
  ){}

  submitForm() {
    const data = {
      nom: this.nom,
      description: this.description,
      prix: this.prix,
      photo: this.photo,
      stock: this.stock,
    }
    this.dialogRef.close(data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.article.photo = event.target.files[0];
  }

  

  sendArticle(arg0: any) {
    throw new Error('Method not implemented.');
  }
  addSubmit() {
    throw new Error('Method not implemented.');
  }
}
