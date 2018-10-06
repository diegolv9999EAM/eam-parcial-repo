import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [CommonModule,MatButtonModule,MatToolbarModule,MatCardModule],
  exports:[MatButtonModule,MatToolbarModule,MatCardModule],
  declarations: []
})
export class MaterialModule { }
