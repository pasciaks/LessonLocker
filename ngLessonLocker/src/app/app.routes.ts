import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionComponent } from './components/question/question.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReviewComponent } from './components/review/review.component';
import { RootComponent } from './components/root/root.component';
import { InstructorBreakComponent } from './components/instructor-break/instructor-break.component';
import { QuestionModifyComponent } from './components/question-modify/question-modify.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';

export const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'question/:id', component: QuestionAddComponent },
  { path: 'quizzes/:id', component: InstructorBreakComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'modify/:id', component: QuestionModifyComponent },
  { path: 'questions/new', component: QuestionAddComponent },
  { path: 'questions/:id', component: QuestionAddComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: '**', component: NotFoundComponent },
];
