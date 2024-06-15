import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFromComponent } from './contact-us-from.component';

describe('ContactUsFromComponent', () => {
  let component: ContactUsFromComponent;
  let fixture: ComponentFixture<ContactUsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsFromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
