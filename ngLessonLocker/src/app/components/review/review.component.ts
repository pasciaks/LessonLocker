import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../models/question';
import { Choice } from '../../models/choice';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent implements OnInit {
  selected: Question | null = null;

  selectedQuestionId: number = 0;

  quizTitle: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  createHostedQuizQuestion() {
    let title = this.quizTitle;
    let questionId = this.selectedQuestionId;

    if (!title) {
      alert('Please enter a title for the quiz.');
      return;
    }

    if (!questionId) {
      alert('Please select a question from question reviews page first.');
      return;
    }

    alert(
      'TODO - Create hosted quiz with title: ' +
        title +
        ' and questionId: ' +
        questionId
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        let questionIdStr = params.get('id');
        console.log(questionIdStr);
        if (questionIdStr) {
          let questionId = parseInt(questionIdStr);
          if (isNaN(questionId)) {
            console.log(questionId);
            this.router.navigateByUrl('/not-found');
          } else {
            this.selectedQuestionId = questionId;
            this.instructorService.show(questionId).subscribe({
              next: (question) => {
                console.log(question);
                if (question) {
                  this.selected = question;
                  console.log(this.selected);
                } else {
                  alert('Question not found');
                  //return this.router.navigateByUrl('/not-found');
                  return;
                }
              },
              error: (err) => {
                alert(err?.error?.message || err?.message || err);
                //return this.router.navigateByUrl('/not-found');
                return;
              },
            });
          }
        }
      },
    });
  }
}
