import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    image: '',
    age: ''
  }
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((user: any) => {
      this.user.firstName = user.results[0].name.first;
      this.user.lastName = user.results[0].name.last;
      this.user.image = user.results[0].picture.medium;
      this.user.age = user.results[0].dob.age;
    })
  }
}
