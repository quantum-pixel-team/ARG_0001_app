import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventsCardComponent } from './home-events-card.component';

describe('HomeEventsCardComponent', () => {
  let component: HomeEventsCardComponent;
  let fixture: ComponentFixture<HomeEventsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEventsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEventsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
