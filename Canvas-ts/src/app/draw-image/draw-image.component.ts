import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-draw-image',
  templateUrl: './draw-image.component.html',
  styleUrls: ['./draw-image.component.scss']
})

export class DrawImageComponent {
  @ViewChild('canvas', {static : true}) myCanvas!:ElementRef;
  ngOnInit() {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      // this.drawImage(context);
      this.drawLove(context);
      this.drawImage(context);

    }
  }

  constructor(){
  }


  drawLove (context: CanvasRenderingContext2D) {
    context.beginPath();
    context.moveTo(75, 40);
    context.bezierCurveTo(75, 37, 70, 25, 50, 25);
    context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    context.bezierCurveTo(20, 80, 40, 102, 75, 120);
    context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    context.bezierCurveTo(85, 25, 75, 37, 75, 40);
    context.fillStyle = "red"; // Màu fill của trái tim
    context.fill();
  }


  drawImage (context: CanvasRenderingContext2D) {
    // const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const image1: HTMLImageElement = new Image();
    const image2: HTMLImageElement = new Image();
    console.log("Loaded Image");
    image1.src = "data:image/jpeg;base64,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";
    context.drawImage(image1, 150, 50, 128, 128);
    image2.src = "data:image/jpeg;base64,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";
    context.drawImage(image2, 300, 50, 128, 128);

    var dataURL = this.myCanvas.nativeElement.toDataURL(); // Get the image data as a base64-encoded string
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "data:image/jpeg;base64,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"; // Set the file name here
    document.body.appendChild(link);
    // link.click();
    document.body.removeChild(link);
  }









}

