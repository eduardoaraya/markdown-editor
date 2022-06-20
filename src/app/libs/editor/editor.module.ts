import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxEditorComponent } from './components/box-editor/box-editor.component';
import { BoxPreviewComponent } from './components/box-preview/box-preview.component';
import { EditorComponent } from './components/editor/editor.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoxEditorComponent, BoxPreviewComponent, EditorComponent],
  exports: [EditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot(),
    MatInputModule,
  ],
})
export class EditorModule {}
