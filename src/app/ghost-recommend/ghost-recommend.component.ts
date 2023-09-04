import {Component} from '@angular/core';

@Component({
  selector: 'app-ghost-recommend',
  templateUrl: './ghost-recommend.component.html',
  styleUrls: ['./ghost-recommend.component.css']
})
export class GhostRecommendComponent {

  content: string = '';

  ghostContent: string = ''

  suggestions = [
    '你好啊',
    '我是谁?',
    '今天天气不错'
  ];


  handleInput() {
    this.ghostContent = '';
    if (this.content.length === 0) {
      return;
    }
    const suggestion = this.suggestions.find(item => item.startsWith(this.content));
    if (suggestion) {
      this.ghostContent = suggestion;
    }
  }

  handleTabKeydown(e: Event): void {
    e.preventDefault();
    this.content = this.ghostContent;
    this.ghostContent = '';
  }

}
