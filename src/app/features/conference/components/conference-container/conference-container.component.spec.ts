import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceContainerComponent } from './conference-container.component';

describe('ConferenceContainerComponent', () => {
  let component: ConferenceContainerComponent;
  let fixture: ComponentFixture<ConferenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
