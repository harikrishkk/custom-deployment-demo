import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  @Input() portfolioData: any;
  selected = 'All';

  onSelection(item: any) {
    this.selected = item;
  }

  get tileData() {
    return this.selected === 'All' ? this.portfolioData.items : this.portfolioData.items.filter((item: any) => item.category === this.selected)
  }
}
