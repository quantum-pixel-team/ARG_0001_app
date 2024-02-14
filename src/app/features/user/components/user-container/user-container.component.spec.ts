import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContainerComponent } from './user-container.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { ServerErrorComponent } from '../../../../shared/components/server-error/server-error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

describe('UserContainerComponent', () => {
  let component: UserContainerComponent;
  let fixture: ComponentFixture<UserContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserContainerComponent,
        UserHeaderComponent,
        UserTableComponent,
        ServerErrorComponent,
      ],
      imports: [HttpClientTestingModule, MatIconModule, MatTableModule],
    });
    fixture = TestBed.createComponent(UserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
