import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  content: string = '';

  constructor() {}

  ngOnInit(): void {}

  setContent(content: string) {
    this.content = content;
  }
}
