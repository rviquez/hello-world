import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit {
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];
  constructor() { }

  submit(course) {
    console.log(course);
  }
  ngOnInit() {
  }

}
