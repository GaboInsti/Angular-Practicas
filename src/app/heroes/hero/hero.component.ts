import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='ironMan';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion():string{
    return this.name+' - '+ this.age;
  }

  changeHero():void{
      this.name='SpiderMan';
  }

  changeEdad():void{
     this.age=30;
  }

  resetForm():void {
    this.age=45;
    this.name='ironMan'
  }
}
