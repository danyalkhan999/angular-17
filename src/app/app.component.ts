import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'angular-17 module';
  courses: Course[] = COURSES;

  // @ViewChild('cardRef', {read: ElementRef}) card!: ElementRef;
  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  date: Date = new Date();

  @ViewChild('container')
  container!: ElementRef

  constructor() {
    console.log("container Div", this.cards);
  }
  ngAfterViewInit(): void {
    this.cards.forEach(card => console.log(card))
    // please avoid data modification here.
    // this.courses[0].description = "test"
  }

  onkeyUp(text: string){
    this.title = text
  }

  onCourseSelected(course: any){
    console.log("button clicked app ", this.cards);

    console.log("container", this.container);
  }
}
