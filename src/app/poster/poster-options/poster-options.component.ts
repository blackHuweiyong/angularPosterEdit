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

  showAllValue = false;

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
    if (control.value && control.value.length > this.maxLength) {
      console.log(control.value.length);
      return { confirm: true, error: true };
    }
    return {};
  }

  public mobileValidator(control: FormControl): { [s: string]: boolean }{
    const reg = /^1[34578]\d{9}$/;
    const valid = reg.test(control.value);
    // 如果验证通过就返回null否则就返回手机号码格式有误
    return valid ? null : {confirm: true, error: true};
  }

  public submitForm() {
    markDirtyControl(this.posterForm);

    if(!this.posterForm.valid) {
      this.message.create('error', '请确认表单');
      return;
    }
  }

  public setPatchValue() {
    this.posterForm.patchValue({name: '我是名字'})
  }

  public setSetValue() {
    this.posterForm.setValue({
      left: 20,
      top: 20,
      isShow: false,
      name: '我是名字',
    });
  }

  public showFormValue() {
    this.showAllValue = !this.showAllValue;
    console.log(JSON.stringify(this.posterForm.value ,null, 2));
  }

  public getValue() {
    if(this.showAllValue){
      return this.posterForm.get('name').value;
    }
    return JSON.stringify(this.posterForm.value ,null, 2);
  }
}
