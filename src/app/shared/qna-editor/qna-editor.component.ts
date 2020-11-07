import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/qna/answer.service';
import { QuestionService } from 'src/app/qna/question.service';
import { SharedService } from 'src/app/services/shared.service';
import { CharLimits, EditorMode, EditorType, Post, QnaRequest } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-qna-editor',
  templateUrl: './qna-editor.component.html',
  styleUrls: ['./qna-editor.component.scss']
})
export class QnaEditorComponent implements OnInit {

  @Input()
  public qnaRequest: QnaRequest;

  @Input()
  public editorMode: EditorMode;

  @Input()
  public editorType: EditorType;

  public isEditorModeUpdate: boolean = false;
  public isEditorTypeQuestion: boolean = true;

  public questionHeader = '';
  public qnaBody: string;
  public markdown: string;
  public isQueError: boolean;
  public errMsg: string;
  public loader = false;
  public editorTypeEnum = EditorType;
  public editorModeEnum = EditorMode;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sharedService.currentQnaRequest$.subscribe(message => {
      this.qnaRequest = message;
      console.log("Recieved qnaObj: ", this.qnaRequest);
    })

    this.isEditorModeUpdate = this.editorMode === EditorMode.UPDATE ? true : false;
    this.isEditorTypeQuestion = this.editorType === EditorType.QUESTION ? true : false;

    if (this.isEditorModeUpdate && (!this.qnaRequest || (Object.keys(this.qnaRequest).length === 0))) {
      this.router.navigate(['/questions/ask']);
    }

    if (this.isEditorTypeQuestion) {
      this.qnaBody = this.qnaRequest.questionBody;
      this.questionHeader = this.qnaRequest.questionHeader;
    } else {
      this.qnaBody = this.qnaRequest.answerBody;
    }
    this.markdown = this.qnaBody;
  }

  isSubmitDisabled(): boolean {
    if (this.isEditorTypeQuestion) {
      return !this.questionHeader || this.loader;
    } else {
      return !this.markdown || this.loader;
    }
  }

  submitClicked(questionHeader: string, qnaBody: string) {
    if (this.isEditorTypeQuestion) {
      this.submitQuestion(questionHeader, qnaBody);
    } else {
      this.submitAnswer(qnaBody);
    }
  }

  // submitAnswerClicked(questionId: string) {
  //   if (this.answerData.length >= this.charLimits.MIN_CHAR_LIMIT_ANSWER
  //     && this.answerData.length <= this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = false;
  //     const answerBody: string = this.answerData;
  //     this.answerService.addAnswer({ answerBody }, questionId).subscribe((answerRes: Post) => {
  //       console.log('added ans response -> ', answerRes);
  //       if (answerRes) {
  //         window.location.reload();
  //       }
  //     });
  //   } else if (this.answerData.length > this.charLimits.MAX_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = true;
  //     this.errMsg = 'Answer is too big !!!';
  //   } else if (this.answerData.length < this.charLimits.MIN_CHAR_LIMIT_ANSWER) {
  //     this.isAnsError = true;
  //     this.errMsg = 'Answer is too short !!!';
  //   }
  // }

  submitAnswer(answerBody: string) {
    if (answerBody.length >= CharLimits.MIN_CHAR_LIMIT_ANSWER
      && answerBody.length <= CharLimits.MAX_CHAR_LIMIT_ANSWER) {
      this.loader = true;
      this.isQueError = false;
      this.errMsg = 'Submitting..';
      if (this.isEditorModeUpdate) {
        // UPDATE ANSWER MODE
        const currentAnswerId = this.qnaRequest.id;
        this.answerService.editAnswer({ answerBody }, currentAnswerId).subscribe((answerRes: Post) => {
          console.log('added ans response -> ', answerRes);
          if (answerRes) {
            window.location.reload();
          }
        });
      } else {
        // ADD ANSWER MODE
        const answerForQuestionId = this.qnaRequest.questionId;
        this.answerService.addAnswer({ answerBody }, answerForQuestionId).subscribe((answerRes: Post) => {
          console.log('added ans response -> ', answerRes);
          if (answerRes) {
            window.location.reload();
          }
        });
      }
    } else {
      this.loader = false;
      this.isQueError = true;
      this.errMsg = 'Content not enough, please add more.';
    }
  }

  submitQuestion(questionHeader: string, questionBody: string) {
    if (questionBody.length >= 100
      && questionBody.length <= 5000
      && questionHeader.length <= 130
      // && !questionBody.trim()
      // && !questionHeader.trim()
    ) {
      this.loader = true;
      this.isQueError = false;
      this.errMsg = 'Submitting..';
      if (this.isEditorModeUpdate) {
        // UPDATE QUESTION MODE
        this.questionService.editQuestion(this.qnaRequest.id, { questionHeader, questionBody }).subscribe((questionRes: Post) => {
          console.log(questionRes);
          alert('Updated!!');
          this.loader = false;
          window.location.href = '/questions/' + questionRes.id + '/updated';
        });
      } else {
        // ADD QUESTION MODE
        this.questionService.addQuestion({ questionHeader, questionBody }).subscribe((questionRes: Post) => {
          console.log(questionRes);
          alert('submitted!!');
          this.loader = false;
          window.location.href = '/questions/' + questionRes.id + '/new';
        });
      }
    } else {
      this.loader = false;
      this.isQueError = true;
      this.errMsg = 'Content not enough, please add more.';
    }
  }


  isConditionSatisfied() {
    if(this.isEditorTypeQuestion) {
      return this.questionHeader && this.markdown;
    } else {
      return this.markdown;
    }
  }

}
