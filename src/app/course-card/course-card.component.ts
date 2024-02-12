import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../Modal/course';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
    @Input({
      required:false // updated: now we can set required as true, so that if there is data require in rendering of any component, you must add it.
    }) course!:Course;

    @Input({required: true})
    index!: number


    @Output('onCourseSelected') selectedCourse = new EventEmitter<Course>();

    viewCourse(){
      console.log("button clickedd !!");
      this.selectedCourse.emit(this.course)
    }
}
