import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;
  constructor() { }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
