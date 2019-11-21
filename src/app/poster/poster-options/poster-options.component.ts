import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { markDirtyControl } from 'src/app/public/methods';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-poster-options',
  templateUrl: './poster-options.component.html',
  styleUrls: ['./poster-options.component.less']
})
export class PosterOptionsComponent implements OnInit {
  posterForm: FormGroup;

  maxLength = 5;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.posterForm = this.fb.group({
      left: [null, [Validators.required]],
      top: [null, [Validators.required]],
      isShow: [true, [Validators.required]],
      name: ['', [Validators.nullValidator, this.maxLengthValidator]]
    });
  }

  public maxLengthValidator = (control: FormControl): { [s: string]: boolean } => {
    if(control.value && control.value.length > this.maxLength) {
      console.log(control.value.length)
      return { confirm: true, error: true };
    }
    return {};
  }

  public submitForm() {
    markDirtyControl(this.posterForm);

    if(!this.posterForm.valid) {
      this.message.create('error', '请确认表单');
      return;
    }
  }
}
