import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  public _contactForm: FormGroup;
  public data: any;
  constructor(private _formBuilder: FormBuilder,
   ) { }

  ngOnInit() {
    this._contactForm = this._formBuilder.group({
      ID: [this.data.ID],
      FirstName: [ this.data.FirstName, [Validators.required]],
      LastName: [ this.data.LastName, [Validators.required]],
      Contact: [ this.data.Contact, [Validators.required]],
      Email: [ this.data.Email , [Validators.required]],
    });
  }

  // onSubmit() {
  //   if (isNaN(this.data.ID)) {
  //     this._contactService.addContact(this._contactForm.value);
  //     this.dialogRef.close();
  //   } else {
  //     this._contactService.editContact(this._contactForm.value);
  //     this.dialogRef.close();
  //   }
  // }


}
