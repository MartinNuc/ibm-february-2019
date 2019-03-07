import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchStyleComponent } from './switch-style.component';

describe('SwitchStyleComponent', () => {
  let component: SwitchStyleComponent;
  let fixture: ComponentFixture<SwitchStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
