import { NgModule } from '@angular/core';
import { SearchPersonPipe } from './search-person.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchPersonPipe],
  exports: [SearchPersonPipe],
  imports: [CommonModule],
})
export class PipesModule {}
