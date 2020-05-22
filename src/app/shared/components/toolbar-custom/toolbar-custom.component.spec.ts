import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCustomComponent } from './toolbar-custom.component';

describe('ToolbarCustomComponent', () => {
  let component: ToolbarCustomComponent;
  let fixture: ComponentFixture<ToolbarCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
