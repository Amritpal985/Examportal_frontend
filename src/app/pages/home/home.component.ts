// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // corrected 'styleUrl' to 'styleUrls'
})
export class HomeComponent {
  welcomeMessage: string = "Welcome to Our Exam Portal";
  features: string[] = [
    "Access to study materials",
    "Take practice tests",
    "Track your progress",
    "Engage with a community of learners"
  ];
  signUpMessage: string = "Sign up now to unlock all the features of our exam portal. Already have an account?";

  constructor() {}
}
