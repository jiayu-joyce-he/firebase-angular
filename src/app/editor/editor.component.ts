import { Component, OnInit } from '@angular/core';
import * as MediumEditor from 'medium-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const editor = new MediumEditor('.editable');
  }
}
