import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomHomeComponent } from './welcom-home.component';

describe('WelcomHomeComponent', () => {
  let component: WelcomHomeComponent;
  let fixture: ComponentFixture<WelcomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
