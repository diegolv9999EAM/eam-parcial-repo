import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [CommonModule,MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule],
  exports:[MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,MatInputModule],
  declarations: []
})
export class MaterialModule { }
