import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-editor',
  templateUrl: './box-editor.component.html',
  styleUrls: ['./box-editor.component.scss'],
})
export class BoxEditorComponent implements OnInit {
  content: string = '';

  @Output()
  changeContent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleKeyUp(_event: Event) {
    this.changeContent.emit(this.content);
  }
}
