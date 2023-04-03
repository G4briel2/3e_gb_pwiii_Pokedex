import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild ("pidgeot") pidgeot!: ElementRef;
  @ViewChild ("nuvem1") nuvem1!: ElementRef;
  @ViewChild ("nuvem2") nuvem2!: ElementRef;
  @ViewChild ("sol") sol!: ElementRef;
  @ViewChild ("camposFrente") campoFrente!: ElementRef;
  @ViewChild ("celeiro") celeiro!: ElementRef;
  @ViewChild ("camposFundo") campoFundo!: ElementRef;
  @ViewChild ("montanhasFundo") montanhasFundo!: ElementRef;

  @HostListener("window:scroll", ['$event'])
  ParalaxScroll(event:any){
    let value = event.target.documentElement.scrollTop;

    
    this.nuvem1.nativeElement.style.left = value * 0.9 + 'px';
    this.nuvem1.nativeElement.style.top = value * 0.2 + "px";
    this.nuvem2.nativeElement.style.left = value * 0.9 + "px";
    this.nuvem2.nativeElement.style.top = value * 0.2 + "px";

    this.sol.nativeElement.style.top = value * 0.2 + "px";

    this.pidgeot.nativeElement.style.left = value * -2 + "px";

    this.montanhasFundo.nativeElement.style.top = value * 0.2 + "px";

    this.campoFrente.nativeElement.style.top = value * 0.075 + "px";
    this.campoFundo.nativeElement.style.top = value * 0.15 + "px";
  }

  scrollToElement($element:any): void {
    $element.scrollIntoView({behavior: "smooth"});
  }
}