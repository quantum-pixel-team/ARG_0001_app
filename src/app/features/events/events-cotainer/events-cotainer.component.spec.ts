import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCotainerComponent } from './events-cotainer.component';

describe('EventsCotainerComponent', () => {
  let component: EventsCotainerComponent;
  let fixture: ComponentFixture<EventsCotainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCotainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsCotainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
