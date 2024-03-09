import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-approval',
  templateUrl: './loan-approval.component.html',
  styleUrls: ['./loan-approval.component.css']
})
export class LoanApprovalComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loanForm = this.formBuilder.group({
      identification: ['', Validators.required],
      incomeProof: ['', Validators.required],
      creditHistory: ['', Validators.required],
      employmentDetails: ['', Validators.required]
    });
  }

  submitLoanForm() {
    if (this.loanForm.invalid) {
      return;
    }

    // Perform API calls or further validation logic here

    // Reset form after submission
    this.loanForm.reset();
  }
}