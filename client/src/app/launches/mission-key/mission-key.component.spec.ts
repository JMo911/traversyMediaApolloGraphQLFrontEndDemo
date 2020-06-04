import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionKeyComponent } from './mission-key.component';

describe('MissionKeyComponent', () => {
  let component: MissionKeyComponent;
  let fixture: ComponentFixture<MissionKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
