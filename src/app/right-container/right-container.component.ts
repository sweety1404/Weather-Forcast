import { Component } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {
  // variables to control tabs
  today:boolean= false;
  week:boolean= true;

  // variables to control metric value
  fahrenheit:boolean= false;
  celsius:boolean= true;

  // functions to control tab values or tab states
  onTodayClick(){
    this.today= true;
    this.week= false;
  }

  onWeekClick(){
    this.today= false;
    this.week= true;
  }

  // functions to control metric values
  onCelsiusClick(){
    this.celsius= true;
    this.fahrenheit= false;
  }
  
  onFahrenheitClick(){
    this.celsius= false;
    this.fahrenheit= true;
  }
}
