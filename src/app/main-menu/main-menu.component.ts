import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainMenu } from './main-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

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
