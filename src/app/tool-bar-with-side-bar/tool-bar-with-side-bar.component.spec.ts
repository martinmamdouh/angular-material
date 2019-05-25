import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarWithSideBarComponent } from './tool-bar-with-side-bar.component';

describe('ToolBarWithSideBarComponent', () => {
  let component: ToolBarWithSideBarComponent;
  let fixture: ComponentFixture<ToolBarWithSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarWithSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarWithSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
