import { Component, OnInit } from '@angular/core';
import { MainMenu } from '../main-menu/main-menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  menuByCategory: Map<string, MainMenu[]> = new Map();
  menuByCategory2: {key: string, value: MainMenu[]}[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData().subscribe(mainMenus => {
      mainMenus.forEach(mainMenu => {
        let menus = this.menuByCategory. get(mainMenu.category);
        if (!menus) {
          menus = [];
          this.menuByCategory.set(mainMenu.category, menus);
        }
        //
        menus.push(mainMenu);
      });

      this.menuByCategory.forEach((value, key) => {
        this.menuByCategory2.push({key, value});
      });
    });
  }

  getKeys(): string[] {
    return Array.from(this.menuByCategory.keys());
  }

  loadData(): Observable<MainMenu[]> {
    return this.http.get<MainMenu[]>('/rest/main-menu.json');
  }

}
