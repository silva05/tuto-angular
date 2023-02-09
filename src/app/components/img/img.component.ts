import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''
  imageDef = 'https://www.nationalgeographic.com.es/medio/2023/01/12/imagen-de-un-atomo_952cc086_230112124807_1280x988.jpg'
  @Output() loaded = new EventEmitter ();

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img=this.imageDef;
  }

  imgloaded(){
    console.log("load hijo");
    this.loaded.emit()
  }

}
