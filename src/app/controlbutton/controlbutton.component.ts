import { Component } from '@angular/core';

@Component({
  selector: 'app-controlbutton',
  templateUrl: './controlbutton.component.html',
  styleUrl: './controlbutton.component.css'
})
export class ControlbuttonComponent {
  isLongPress: boolean = false;
  onButtonClick() {
    this.isLongPress = true;
    setTimeout(() =>{
      this.isLongPress = false;
    },1000)
  }

}
