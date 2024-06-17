import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogActions } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    UserContainerComponent,
    UserHeaderComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogActions,
    RouterModule.forChild(routes),
  ],
})
export class UserModule {}
