import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './Modal/course';
import { COURSES } from './db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17 module';
  courses: Course[] = COURSES;

  date: Date = new Date();

  onkeyUp(text: string){
    this.title = text
  }

  onCourseSelected(course: any){
    console.log("button clicked app ", course);
  }
}
