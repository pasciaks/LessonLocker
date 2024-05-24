import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  //FIELDS
  newUser:  User = new User();

  //CONSTRUCTOR
  constructor(private authService: AuthService, private router: Router){}

  //LFECYCLE HOOKS
  ngOnInit(): void{

  }

  //OTHER METHODS
  register(newUser: User): void {
    //console.log(newUser); //test purposes for data binding confirmation
    this.authService.register(newUser).subscribe({
      next: (user) => {
        console.log('Registration successful', user);
        this.authService.login(newUser.username, newUser.password).subscribe({
          next: () => this.router.navigateByUrl("todo"),
          error: (error) => console.error('Login failed', error)
        });
      },
      error: (error) => console.error('Registration failed', error)
    });
  }

}
