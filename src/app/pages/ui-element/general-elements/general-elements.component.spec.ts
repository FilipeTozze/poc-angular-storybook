import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralElementsComponent } from './general-elements.component';

describe('GeneralElementsComponent', () => {
  let component: GeneralElementsComponent;
  let fixture: ComponentFixture<GeneralElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
