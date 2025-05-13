import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent implements OnInit {

  subscriptionForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.subscriptionForm = this.fb.group({
      mallName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      additionalInfo: [''],
      // Aquí podrías añadir más campos según necesites
    });
  }

  onSubmit(): void {
    if (this.subscriptionForm.valid) {
      console.log('Form submitted:', this.subscriptionForm.value);
      // Aquí iría la lógica para enviar los datos al servidor
      // Por ejemplo:
      // this.mallService.subscribeMall(this.subscriptionForm.value).subscribe(...);
    }
  }
}
