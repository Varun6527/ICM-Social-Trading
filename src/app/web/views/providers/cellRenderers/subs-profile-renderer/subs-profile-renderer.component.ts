// nickname-renderer.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subsProfile-renderer',
  template: `
    <a [href]="'/subscriptions/'+params.data.Id" class="default-link">
      <span>{{ params.value }}</span>
    </a>
  `
})
export class SubsProfileRendererComponent implements OnInit {
  params: any;

  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }
}
