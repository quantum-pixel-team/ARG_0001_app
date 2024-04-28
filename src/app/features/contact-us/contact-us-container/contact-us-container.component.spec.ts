import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsContainerComponent } from './contact-us-container.component';

describe('ContactUsContainerComponent', () => {
  let component: ContactUsContainerComponent;
  let fixture: ComponentFixture<ContactUsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
