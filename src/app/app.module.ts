import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorService } from './author.service';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { StarButtonComponent } from './star-button/star-button.component';
import { SummaryPipe } from './summary.pipe';
import { TitleInputComponent } from './title-input/title-input.component';
import { TitlePipe } from './title.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TweetLikeComponent } from './tweet-like/tweet-like.component';
import { IfTestComponent } from './if-test/if-test.component';
import { FormFormatDirective } from './form-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    StarButtonComponent,
    TitleInputComponent,
    TitlePipe,
    BootstrapPanelComponent,
    TweetLikeComponent,
    IfTestComponent,
    FormFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export interface changeEvent{
  status:boolean;
}