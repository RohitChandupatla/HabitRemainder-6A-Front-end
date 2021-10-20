import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
