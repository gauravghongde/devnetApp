import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QnaRequest } from '../utilities/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private currentQnaRequest: QnaRequest = new QnaRequest();
  private messageSource = new BehaviorSubject(this.currentQnaRequest);
  currentQnaRequest$ = this.messageSource.asObservable();

  constructor() { }

  public setQnaRequest(qnaObj: QnaRequest) {
    this.currentQnaRequest = new QnaRequest();
    this.currentQnaRequest.id = qnaObj.id;
    this.currentQnaRequest.questionId = qnaObj.questionId;
    this.currentQnaRequest.answerBody = qnaObj.answerBody;
    this.currentQnaRequest.questionBody = qnaObj.questionBody;
    this.currentQnaRequest.questionHeader = qnaObj.questionHeader;
    this.messageSource.next(this.currentQnaRequest)
  }

  public getQnaRequest(): QnaRequest {
    return this.currentQnaRequest;
  }
}
