import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sxf-icons-v2',
  templateUrl: './icons-v2.component.html',
  styleUrls: ['./icons-v2.component.scss']
})
export class IconsV2Component implements OnInit {
  @Input() iconName = '';
  @Input() color = '';
  @Input() size = 'sm';
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
