import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oa-icons',
  templateUrl: './oa-icons.component.html',
  styleUrls: ['./oa-icons.component.scss']
})
export class OaIconsComponent implements OnInit {

  constructor() { }

  @Input() iconName:string;
  @Input() fill:string;
  @Input() size:string;

  ngOnInit(): void {
  }

}
