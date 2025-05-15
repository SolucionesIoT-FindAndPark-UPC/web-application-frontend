import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent implements OnInit {

  subscriptionForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.subscriptionForm = this.fb.group({
      mallName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      additionalInfo: [''],
    });
  }

  onSubmit(): void {
    if (this.subscriptionForm.valid) {
      console.log('Form submitted:', this.subscriptionForm.value);
    }
    this.router.navigate(['/monitoring-page']);

  }
}