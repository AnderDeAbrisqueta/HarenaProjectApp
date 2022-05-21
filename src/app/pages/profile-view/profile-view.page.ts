import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../model/person';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPage implements OnInit {
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
    personAtending: '',
  };

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.personService
        .getPerson(id)
        .subscribe((data) => (this.person = data));
    }
  }
}
