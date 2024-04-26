import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConferenceComponent } from './home-conference.component';

describe('HomeConferenceComponent', () => {
  let component: HomeConferenceComponent;
  let fixture: ComponentFixture<HomeConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
