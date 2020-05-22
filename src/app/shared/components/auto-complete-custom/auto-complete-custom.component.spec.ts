import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteCustomComponent } from './auto-complete-custom.component';

describe('AutoCompleteCustomComponent', () => {
  let component: AutoCompleteCustomComponent;
  let fixture: ComponentFixture<AutoCompleteCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
