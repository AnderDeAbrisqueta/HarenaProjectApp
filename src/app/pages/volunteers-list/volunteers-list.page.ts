import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.page.html',
  styleUrls: ['./volunteers-list.page.scss'],
})
export class VolunteersListPage implements OnInit {
  volunteers: Observable<Person[]>;
  filterArray: Observable<Person[]> = this.personService.getPersons();

  constructor(public personService: PersonService, private router: Router) {
    this.volunteers = this.personService.getPersons();
  }

  ngOnInit() {}

  addVolunteer() {
    this.router.navigateByUrl('create-profile');
  }

  goEditPerson(id: string) {
    this.router.navigateByUrl(`edit-profile/${id}`);
  }
}
