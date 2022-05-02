import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  volunteer: Person = {
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
  };
  pageTitle: string = 'Nueva Persona';
  action: string = 'create-profile';

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.pageTitle = 'Editar Persona';
      this.action = 'edit-profile';
      this.personService
        .getPerson(id)
        .subscribe((data) => (this.volunteer = data));
    }
  }

  addVolunteer() {
    if (this.action === 'create-profile') {
      this.personService.addPerson(this.volunteer);
    } else {
      this.personService.updatePerson(this.volunteer);
    }
    this.router.navigateByUrl('/volunteers-list');
  }
}
