import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorService } from './author.service';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FormFormatDirective } from './form-format.directive';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { IfTestComponent } from './if-test/if-test.component';
import { TestInterceptor } from './interceptor/test.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './network/users/users.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersService } from './services/githubFollwer.service';
import { PostService } from './services/post.service';
import { UserService } from './services/users.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StarButtonComponent } from './star-button/star-button.component';
import { SummaryPipe } from './summary.pipe';
import { TitleInputComponent } from './title-input/title-input.component';
import { TitlePipe } from './title.pipe';
import { TweetLikeComponent } from './tweet-like/tweet-like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ArchiveComponent } from './archive/archive.component';


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
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    UsersComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    AuthorService,
    PostService,
    UserService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }, // 取代默认的处理
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export interface changeEvent {
  status: boolean;
}