import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

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

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {}

  addVolunteer() {
    this.personService.addPerson(this.volunteer);
    this.router.navigateByUrl('/volunteers-list');
  }
}
