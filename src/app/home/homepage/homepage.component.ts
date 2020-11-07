import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/qna/question.service';
import { Post } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  allQuestions: Post[];
  loader = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.loader = false;
  }

  getAllQuestions() {
    this.questionService.getAllQuestions().subscribe((questionObjArr: Post[]) => {
      this.allQuestions = questionObjArr;
    });
  }

}
