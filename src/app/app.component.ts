import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //link de imagen
  imgParent= 'https://www.nationalgeographic.com.es/medio/2023/01/12/imagen-de-un-atomo_952cc086_230112124807_1280x988.jpg';

  onLoaded(){
    console.log('log padre');
  }

}
