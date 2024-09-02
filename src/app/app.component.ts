import { Component, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'cv';
  panelOpenState = false;
  step = 0;
  stepDos = 0;

  ngAfterViewInit() {
    const elemsCollasible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemsCollasible);
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.collapsible');
  
//    var instances = M.Collapsible.init(elems, {accordion:true});
// });