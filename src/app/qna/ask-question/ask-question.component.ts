import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { EditorMode, EditorType, QnaRequest } from 'src/app/utilities/constants/app.constants';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  public viewOption: string;
  public qnaObjToEdit: QnaRequest = new QnaRequest();
  public editorMode: EditorMode;
  public editorType: EditorType = EditorType.QUESTION;
  questionTitle = '';
  questionBody: string;
  markdown: string;
  isQueError: boolean;
  errMsg: string;
  loader = false;
  state$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.editorMode = this.route.snapshot.data.editorMode;
    console.log("Current Mode: ", this.viewOption);
    this.qnaObjToEdit = this.sharedService.getQnaRequest();
    console.log("edit mode wala question: ", this.qnaObjToEdit);
  }
}
