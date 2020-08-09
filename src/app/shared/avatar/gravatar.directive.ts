import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Md5 } from './md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit {

  @Input() avatarKey: string;
  fallback = 'identicon'; // https://en.gravatar.com/site/implement/images/

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (this.el) {
      if (!this.avatarKey || !this.el.nativeElement) {
        return;
      }
      const emailHash = Md5.hashStr(this.avatarKey.trim().toLowerCase());
      this.el.nativeElement.src =
      `//www.gravatar.com/avatar/${emailHash}?d=${this.fallback}`;
    }
  }
}
