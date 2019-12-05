import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() currentPage: number;
  @Input() isNextAvailable: boolean;
  
  @Output() pageChanged = new EventEmitter<string>();

  constructor() { }

  changePage(type){
    this.pageChanged.emit(type);
  }
}
