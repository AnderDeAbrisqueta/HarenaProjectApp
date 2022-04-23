import { Component, OnInit } from '@angular/core';
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

  constructor(private personService: PersonService) {
    this.volunteers = this.personService.getPersons();
  }

  ngOnInit() {}

  addVolunteer() {
    const volunteer = {
      personId: '1',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXcTgtM39iB0JTxTCUPekAHaDt%26pid%3DApi&f=1',
      firstName: 'Edurne',
      lastName: 'Kissell',
      gender: 'Female',
      address: {
        street: 'Fátima',
        numberStreet: 20,
        postCode: 29009,
      },
      phone: '449-353-6011',
      email: 'akissell0@state.gov',
      userType: 'Volunteer',
    };
    this.personService.addPerson(volunteer);
  }
}
