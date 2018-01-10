import { CoursesService } from './../courses.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {
  course = {
    title: "The Complete Angular Course",
    ratings: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  constructor(service: CoursesService) {

  }

  ngOnInit() {}

  /*title = 'List of courses';
  isActive = true;
  courses;
  email = 'me@example.com';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  getTitle() {
    return this.title;
  }

  onSave() {
    console.log('Button was clicked');

  }

  onKeyUp() {
    console.log(this.email);

  }*/
}
