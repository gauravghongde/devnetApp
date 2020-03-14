import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../constants/app.constants';
import { AuthService } from '../_services/auth.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUserSubj: BehaviorSubject<User>;
  currentUserObj: User;
  currentUser$: Observable<User>;
  status: boolean = false;
  searchQuery: any;

  constructor(
    private authService: AuthService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.currentUserSubj = this.authService.currentUser;
    this.currentUserObj = this.currentUserSubj.value;
    this.currentUser$ = this.currentUserSubj.asObservable();
  }

  doSearch() {
    if (this.searchQuery) {
      // encodeURIComponent(this.searchQuery.trim())
      this.questionService.searchQuestion(this.searchQuery).subscribe(questionObjArr => console.log(questionObjArr));
    }
  }

  logout() {
    this.authService.logout();
  }

}
