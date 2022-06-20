import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-preview',
  templateUrl: './box-preview.component.html',
  styleUrls: ['./box-preview.component.scss'],
})
export class BoxPreviewComponent implements OnInit {
  @Input()
  content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
