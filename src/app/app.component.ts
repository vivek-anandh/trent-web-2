import { Component, VERSION } from '@angular/core';
import {Ec2Component} from './ec2/ec2.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major + '.' + VERSION.minor;
}
