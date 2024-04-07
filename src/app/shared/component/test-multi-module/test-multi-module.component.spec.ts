import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultiModuleComponent } from './test-multi-module.component';

describe('TestMultiModuleComponent', () => {
  let component: TestMultiModuleComponent;
  let fixture: ComponentFixture<TestMultiModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMultiModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestMultiModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
