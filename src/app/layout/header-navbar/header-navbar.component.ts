import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
  menubarItems!: MenuItem[];

  ngOnInit(): void {
    this.menubarItems = [
      {label: 'Home', routerLink: ['/'], icon: 'pi pi-fw pi-home'},
      {label: 'Evangelion', routerLink: ['/evangelion'], icon: 'pi pi-fw pi-images' },
      {label: 'Other', routerLink: ['/other'], icon: 'pi pi-fw pi-images' },
      {label: 'Wishlist', routerLink: ['/wishlist'], icon: 'pi pi-fw pi-list', disabled: true},
      {label: 'Contact', routerLink: ['/contact'], icon: 'pi pi-fw pi-envelope', disabled: true},
    ];
  }

}
