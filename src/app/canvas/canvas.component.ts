import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements OnInit, AfterViewInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
    ngAfterViewInit(): void {
      this.initializeCanvas();
    }
  
    initializeCanvas(): void {
      const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  
      // Set the canvas' internal drawing size
      canvas.width = 128; // Set the width to match CSS
      canvas.height = 64; // Set the height to match CSS
  
      // Load the image
      const image = new Image();
      image.src = '../assets/delete_16.png'; // Replace with your image path
  
      // Draw the image on the canvas once it's loaded
      image.onload = function() {
        // Draw the image at its original dimensions
        console.log(image.width,image.height);
        context.drawImage(image, 0+(128-64)/2, 0, image.width, image.height);
      };
    }

}
