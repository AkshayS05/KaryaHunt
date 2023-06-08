import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import 'bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  logoFirst = '../../../assets/logo_image_1.jpg';
  logoSecond = '../../../assets/logo_image_2.jpg';
}
