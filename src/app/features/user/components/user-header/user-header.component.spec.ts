import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderComponent } from './user-header.component';
import {MatIconModule} from "@angular/material/icon";

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHeaderComponent],
      imports: [
        MatIconModule
      ]
    });
    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
