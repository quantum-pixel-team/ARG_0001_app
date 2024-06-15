import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsLocationComponent } from './contact-us-location.component';

describe('ContactUsLocationComponent', () => {
  let component: ContactUsLocationComponent;
  let fixture: ComponentFixture<ContactUsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
