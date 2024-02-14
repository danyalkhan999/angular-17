import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../Modal/course';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent{
    @Input({
      required:false // updated: now we can set required as true, so that if there is data require in rendering of any component, you must add it.
    }) course!:Course;




    viewCourse(){
      console.log("button clickedd !!");
    }

    categoryStyles(){
      return{
        'color': this.course.category === 'BEGINNER' ? 'green' : this.course.category === 'INTERMEDIATE' ? 'orange': 'red'
      }
    }
}
