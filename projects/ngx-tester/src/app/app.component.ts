import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * App Component
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Array for spinner size
   *
   * @type {Array<string>}
   * @memberof AppComponent
   */
  sizeArray: Array<string> = ['small', 'default', 'medium', 'large'];

  /**
   * Loading Text for spinner
   *
   * @type {string}
   * @memberof AppComponent
   */
  loadingText: string = 'Loading...';

  /**
   * Spinner configuration
   *
   * @type {object}
   * @memberof AppComponent
   */
  spinnerConfig: object = {
    bdOpacity: 0.9,
    bdColor: '#333',
    size: 'medium',
    color: '#fff',
    type: 'ball-8bits',
    fullScreen: true
  };

  /**
   * Array of loaders
   *
   * @type {Array<string>}
   * @memberof AppComponent
   */
  loaders: Array<string> = [
    'ball-8bits',
    'ball-atom',
    'ball-beat',
    'ball-circus',
    'ball-climbing-dot',
    'ball-clip-rotate',
    'ball-clip-rotate-multiple',
    'ball-clip-rotate-pulse',
    'ball-elastic-dots',
    'ball-fall',
    'ball-fussion',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-newton-cradle',
    'ball-pulse',
    'ball-pulse-rise',
    'ball-pulse-sync',
    'ball-rotate',
    'ball-running-dots',
    'ball-scale',
    'ball-scale-multiple',
    'ball-scale-pulse',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin',
    'ball-spin-clockwise',
    'ball-spin-clockwise-fade',
    'ball-spin-clockwise-fade-rotating',
    'ball-spin-fade',
    'ball-spin-fade-rotating',
    'ball-spin-rotate',
    'ball-square-clockwise-spin',
    'ball-square-spin',
    'ball-triangle-path',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'cube-transition',
    'fire',
    'line-scale',
    'line-scale-party',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-clockwise-fade',
    'line-spin-clockwise-fade-rotating',
    'line-spin-fade',
    'line-spin-fade-rotating',
    'pacman',
    'square-jelly-box',
    'square-loader',
    'square-spin',
    'timer',
    'triangle-skew-spin'
  ];

  /**
   * Creates an instance of AppComponent.
   * @param {NgxSpinnerService} spinner Spinner service
   * @memberof AppComponent
   */
  constructor(private spinner: NgxSpinnerService) { }

  /**
   * To show/hide spinner
   *
   * @memberof AppComponent
   */
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}

// import { Component } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   loadingText: string;

//   public spinnerConfig: any = {
//     bdColor: 'rgba(55,55,51,0.8)',
//     size: 'medium',
//     color: 'rgba(123,255,51,0.8)',
//   };

//   constructor(private spinner: NgxSpinnerService) { }

//   showSpinner(name?: string) {
//     this.spinner.show(name);
//     setTimeout(() => {
//       this.spinner.hide(name);
//       // this.goCrazy();
//     },
//       5000);
//   }

//   changeAndShowSpinner() {
//     this.loadingText = 'added text';
//     this.spinner.show(undefined, { type: 'line-scale-party', size: 'large', bdColor: 'rgba(100,149,237, .8)', color: 'white' });
//     setTimeout(() => this.spinner.hide(), 3000);
//   }

//   goCrazy() {
//     this.spinner.show('1');
//     setInterval(() => this.spinner.show('1'), 1000);
//     setInterval(() => this.spinner.show('2'), 2000);
//     setInterval(() => this.spinner.show('Wasabi'), 3000);
//     setInterval(() => this.spinner.show('Catchup'), 1000);
//     setInterval(() => this.spinner.show(), 5000);
//   }

// }
