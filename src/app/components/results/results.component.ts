import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public bmi: number;
  public overWeight: boolean = false;
  public normalWeight: boolean = false;
  public lackOfWeight: boolean = false;

  constructor( private router: Router, private activatedRoute: ActivatedRoute) 
  { 
    this.bmi = +this.activatedRoute.snapshot.paramMap.get('value')!;
  }

  ngOnInit(): void {
    this.getResult();
  }
  
  getResult() {

    if( this.bmi >= 25 ) {
      this.overWeight = true;
    } else if( this.bmi >= 18.5 ) {
      this.normalWeight = true;
    } else {
      this.lackOfWeight = true;
    }
  }

  toReCalulate() {
    this.router.navigate(['']);
  }

}
