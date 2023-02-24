import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public year: number = 25;
  public weight: number = 60;
  public height: number = 170;
  public sex: string = '';

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  lessWeight() { this.weight -= 1; }
  addWeight() { this.weight += 1; }
  lessYear() { this.year -= 1; }
  addYear() { this.year += 1; }
  changeHeight( event: any ) { this.height = event.target.value; }
  getMale() { this.sex = 'male' }
  getFemale() { this.sex = 'female' }
  calculateBIM() {
    let bmi = this.weight / Math.pow( this.height/100, 2 );
    this.router.navigate(['/results', bmi.toFixed( 1 )]);
  }

}
