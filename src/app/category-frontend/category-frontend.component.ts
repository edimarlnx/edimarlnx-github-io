import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-frontend',
  templateUrl: './category-frontend.component.html',
  styleUrls: [ './category-frontend.component.scss' ]
})
export class CategoryFrontendComponent implements OnInit, OnChanges {
  section: string;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.section = params.section;
    });
  }

  ngOnChanges() {
    console.log(this.section);
  }
}
