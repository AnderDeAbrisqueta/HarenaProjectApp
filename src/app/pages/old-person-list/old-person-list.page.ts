import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../model/person';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-person-list',
  templateUrl: './old-person-list.page.html',
  styleUrls: ['./old-person-list.page.scss'],
})
export class OldPersonListPage implements OnInit {
  oldPersons: Observable<Person[]>;
  // filterArray: Observable<Person[]> = this.personService.getPersons();
  searchedText: string = '';

  constructor(public personService: PersonService, private router: Router) {
    this.oldPersons = this.personService.getPersons();
  }

  ngOnInit() {}

  addVolunteer() {
    this.router.navigateByUrl('create-profile');
  }

  goEditPerson(id: string) {
    this.router.navigateByUrl(`edit-profile/${id}`);
  }

  searchOldPerson(event) {
    const text = event.target.value;
    this.searchedText = text;
  }

  goOldPersonProfileView(id: string) {
    this.router.navigateByUrl(`profile-view/${id}`);
  }
}
