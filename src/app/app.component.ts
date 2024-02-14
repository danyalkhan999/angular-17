import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './Modal/course';
import { COURSES } from './db-data';
import { CommonModule } from '@angular/common';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule, HighlightedDirective, NgxUnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
})
export class AppComponent {
  title = 'angular-17 module';
  courses: Course[] = COURSES;

  // @ViewChild('cardRef', {read: ElementRef}) card!: ElementRef;
  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  date: Date = new Date();





  onkeyUp(text: string){
    this.title = text
  }

  onCourseSelected(course: any){
    console.log("button clicked app ", this.cards);

  }
}
