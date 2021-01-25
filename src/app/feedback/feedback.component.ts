import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { FB_RATE_PARAM, FB_TEXT_PARAM, FORM_URL } from '../utilities/constants/feedback.constants';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackFormGroup: FormGroup;
  public preText = 'Experience was';
  public ratingMessages = [
    `${this.preText} worst!`,
    `${this.preText} pretty bad.`,
    `${this.preText} acceptable.`,
    `${this.preText} pretty good.`,
    `${this.preText} great!`
  ];
  public loading: boolean = false;
  public submitted: boolean;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.feedbackFormGroup = new FormGroup({
      feedbackText: new FormControl(null, [Validators.required]),
      rating: new FormControl()
    });
    if (sessionStorage.getItem('isFBSubmitted') === 'true') {
      this.submitted = true;
    }
  }

  public submit() {
    this.loading = true;
    const fbBody = new FormData;
    fbBody.append(FB_TEXT_PARAM, this.feedbackFormGroup.get('feedbackText').value);
    fbBody.append(FB_RATE_PARAM, this.feedbackFormGroup.get('rating').value);
    this.commonService.postMethodWithOptions(FORM_URL, fbBody, { responseType: 'text/html' }).subscribe(
      (resp: any) => {
        this.submitted = true;
        sessionStorage.setItem('isFBSubmitted', 'true');
        this.loading = false;
        console.log("resp", resp);
      },
      (err: any) => {
        this.submitted = true;
        sessionStorage.setItem('isFBSubmitted', 'true');
        this.loading = false;
        console.log("err", err);
      }
    );
  }

  public getFormControl(name: string): AbstractControl {
    return this.feedbackFormGroup.get(name);
  }

}
