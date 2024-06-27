import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  applyForm: FormGroup;
  title = 'Job Application';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      resume: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.applyForm.patchValue({
        resume: file
      });
    }
  }

  apply() {
    if (this.applyForm.valid) {
      const formData = new FormData();
      formData.append('name', this.applyForm.get('name')?.value);
      formData.append('email', this.applyForm.get('email')?.value);
      formData.append('mobile', this.applyForm.get('mobile')?.value);
      formData.append('resume', this.applyForm.get('resume')?.value);

      this.http.post('http://localhost:3000/api/apply', formData).subscribe({
        next: (response) => {
          console.log(response);
          // Navigate to the success page
          this.router.navigate(['/success']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
        complete: () => {
          console.log('Application submitted successfully!');
        }
      });
    } else {
      alert('Please fill in all the required details correctly.');
    }
  }
}
