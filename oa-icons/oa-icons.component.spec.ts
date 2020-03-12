import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaIconsComponent } from './oa-icons.component';

describe('OaIconsComponent', () => {
  let component: OaIconsComponent;
  let fixture: ComponentFixture<OaIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
