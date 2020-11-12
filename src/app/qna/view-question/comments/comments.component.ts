import { Component, OnInit, Input } from '@angular/core';
import { Post, CharLimits, Comment } from 'src/app/utilities/constants/app.constants';
import { CommentService } from '../../comment.service';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;
  public isCommentSubmitted = false;
  public isEditSuccessfull = false;
  public commentData = '';
  public commentEditData = '';
  public previousEditId = '';
  public isCmtError = false;
  public editClicked = false;
  public charLimits = CharLimits;
  public newComment: Comment = new Comment();
  public errMsg: string;

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  hasEditAccess(commentUser: string) {
    const loggedInUser: string = this.authService.currentUser.value.username;
    return (commentUser === loggedInUser) ? true : false;
  }

  testClick() {
    delete this.post.comments[0];
  }

  scroll(el: Element) {
    let elementToScrollTo = el;
    const childOffset = 5;
    for (let i = 0; i < childOffset; i++) {
        if (!elementToScrollTo.previousElementSibling) {
          break;
        }
        elementToScrollTo = elementToScrollTo.previousElementSibling;
    }
    elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
    document.getElementById('addCommentButton' + this.index).click();
  }

  submitCommentClicked(postId: string) {
    if (this.commentData.length >= this.charLimits.MIN_CHAR_LIMIT_COMMENT
      && this.commentData.length <= this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
      this.isCmtError = false;
      const body: string = this.commentData;
      this.commentService.addComment({body}, postId).subscribe((commentRes: any) => {
        console.log('posted comment response -> ', commentRes);
        if (commentRes) {
          console.log('post before pushing-> ', this.post);
          this.post.comments.push(commentRes);
          console.log('post after pushing-> ', this.post);
          this.isCommentSubmitted = true;
          // this.newComment = commentRes;
          this.commentData = '';
        }
        this.isCommentSubmitted = false;
      });
    } else if (this.commentData.length > this.charLimits.MAX_CHAR_LIMIT_COMMENT) {
      this.isCmtError = true;
      this.errMsg = 'Comment is too big!!!';
    } else if (this.commentData.length < this.charLimits.MIN_CHAR_LIMIT_COMMENT) {
      this.isCmtError = true;
      this.errMsg = 'Comment is too short!!!';
    }
  }

  collapseAllOthers(id: string) {
    this.post.comments.forEach( comment => {
      if (comment.id !== id) {
        this.editCancelClicked(comment.id);
      }
    });
  }

  editCommentClicked(commentId: string, commentBody: string) {
    this.isCommentSubmitted = false;
    this.collapseAllOthers(commentId);

    this.previousEditId = commentId;
    document.getElementById('commentBodyDOM' + commentId).style.display = 'none';
    this.commentEditData = document.getElementById('commentTextDOM' + commentId).innerText;
    console.log('editClicked-' + this.commentEditData);
    const el = document.getElementById('commentEditAreaCollapse' + commentId);
    if (el.classList) {
        el.classList.remove('collapse');
    }
  }

  editCancelClicked(commentId: string) {
    console.log('editCancelClicked - ' + commentId);
    document.getElementById('commentBodyDOM' + commentId).style.display = 'block';
    this.commentEditData = '';
    const el = document.getElementById('commentEditAreaCollapse' + commentId);
    if (el.classList) {
      el.classList.add('collapse');
    }
  }

  submitEditCommentClicked(postId: string, commentId: string) {
    console.log('EditSubmitted - ' + commentId);
    const body: string = this.commentEditData;
    this.editCancelClicked(commentId);
    this.commentService.updateComment({body}, postId, commentId).subscribe((commentRes: any) => {
      console.log('edited comment response -> ', commentRes);
      document.getElementById('commentTextDOM' + commentId).innerText = body;
    });
  }

  deleteCommentClicked(postId: string, commentId: string) {
    if (confirm('Are you sure to delete this comment??')) {
      this.commentService.deleteComment(postId, commentId).subscribe((commentRes: any) => {
        console.log('deleted comment response -> ', commentRes);
        delete this.post.comments[this.post.comments.findIndex(item => item.id === commentId)];
        this.post.comments = this.post.comments.filter(n => n); // to filter undefined values
      });
    }
  }

}
