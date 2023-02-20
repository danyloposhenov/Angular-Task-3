import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  public name!: string;
  public taskName!: string;
  public count = 6;

  addList(): void {
    this.taskName = this.name;
    this.name = '';
    this.count++;
  }

  checkStatus(status: boolean): void {
    this.count--;
  }
}
