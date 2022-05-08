import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  person: Person = {
    personId: '',
    imageUrl: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: {
      street: '',
      numberStreet: 0,
      postCode: 0,
    },
    phone: '',
    email: '',
    userType: '',
    description: '',
    person: '',
  };
  pageTitle: string = 'Nueva Persona';
  action: string = 'create-profile';

  persons: Observable<Person[]>;

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.persons = this.personService.getPersons();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.pageTitle = 'Editar Persona';
      this.action = 'edit-profile';
      this.personService
        .getPerson(id)
        .subscribe((data) => (this.person = data));
    }
  }

  addPerson() {
    if (this.action === 'create-profile') {
      this.personService.addPerson(this.person);
    } else {
      this.personService.updatePerson(this.person);
    }
    if (this.person.userType === 'Persona Voluntaria') {
      this.router.navigateByUrl('/volunteers-list');
    } else {
      this.router.navigateByUrl('/old-person-list');
    }
  }
}
