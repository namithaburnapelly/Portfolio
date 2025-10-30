import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  standalone: false,
  template: `{{ displayText }}`,
  // styleUrl: './typewriter.component.css',
})
export class TypewriterComponent {
  @Input({ required: true }) fullText: string = '';
  displayText: string = '';
  currentIndex: number = 0;
  ngOnInit(): void {
    this.typeWriter();
  }
  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => {
        this.typeWriter();
      }, 100);
    }
  }
}
