import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
}
