import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CreatePDV',
  templateUrl: './CreatePDV.page.html',
  styleUrls: ['./CreatePDV.page.scss'],
})
export class CreatePDVPage implements OnInit {
  public CreatePDV: string;
  public NumPDV: string;
  customPickerOptions: any;
  currentDate;
  formattedDate;
  formattedDatePT;

  constructor(private activatedRoute: ActivatedRoute) {
    this.currentDate = new Date();
    this.getFormattDate()
  }

  getFormattDate(){
    var dateObj = new Date()

    var year =  dateObj.getFullYear().toString();
    var month = (dateObj.getMonth() + 1).toString();
    if (month.length === 1){
      month = ("0" + (dateObj.getMonth() + 1)).toString()
    };
    var date = dateObj.getDate().toString();
    if (date.length === 1){
      date = ("0" + dateObj.getDate()).toString()
    };

    this.formattedDate = month + "/" + date + "/" + year;
    this.formattedDatePT = date + "/" + month + "/" + year;
  }

  ngOnInit() {
    this.CreatePDV = this.activatedRoute.snapshot.paramMap.get('id');
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }
}
