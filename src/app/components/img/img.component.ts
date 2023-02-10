import { Input, Component,
   OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''

  imgdefecto = 'https://www.softzone.es/app/uploads/2018/04/guest.png'
  @Output() loaded = new EventEmitter <string>();

  constructor() { }
  ngOnInit(): void { }

  imgError(){ this.img=this.imgdefecto; }

  imgloadhijo(){ //Manda el mensaje al componente padre
    console.log("load hijo");
    this.loaded.emit(this.img)
  }
}
