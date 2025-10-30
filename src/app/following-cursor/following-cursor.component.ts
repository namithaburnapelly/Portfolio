import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-following-cursor',
  standalone: false,
  template: `<div class="cursor-follower">
    <div class="cursor-inner"></div>
  </div>`,
  styleUrl: './following-cursor.component.css',
})
export class FollowingCursorComponent {
  private cursorFollower!: HTMLElement;
  private innerCursor!: HTMLElement;
  ngAfterViewInit(): void {
    this.cursorFollower = document.querySelector('.cursor-follower')!;
    this.innerCursor = document.querySelector('.cursor-inner')!;
    this.addMouseMoveListener();
    this.addVisibilityChangeListener();
  }
  ngOnDestroy(): void {
    this.removeMouseMoveListener();
    this.removeVisibilityChangeListener();
  }
  private addMouseMoveListener(): void {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }
  private removeMouseMoveListener(): void {
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }
  private addVisibilityChangeListener(): void {
    document.addEventListener(
      'visibilitychange',
      this.onVisibilityChange.bind(this)
    );
  }
  private removeVisibilityChangeListener(): void {
    document.removeEventListener(
      'visibilitychange',
      this.onVisibilityChange.bind(this)
    );
  }
  @HostListener('document:mousemove', ['$event']) onMouseMove(
    event: MouseEvent
  ) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // this.cursorFollower.style.transition = 'transform 0.3s ease-out';
    this.cursorFollower.style.transform = `translate(${mouseX - 34}px, ${
      mouseY - 24
    }px)`;
    const target = event.target as HTMLElement;
    if (target.tagName === 'H2' || target.id === 'home') {
      this.cursorFollower.style.height = '50px';
      this.cursorFollower.style.width = '50px';
      this.innerCursor.style.width = '30px';
      this.innerCursor.style.height = '30px';
      this.innerCursor.style.opacity = '1';
    } else {
      this.cursorFollower.style.height = '40px';
      this.cursorFollower.style.width = '40px';
      this.innerCursor.style.width = '0px';
      this.innerCursor.style.height = '0px';
      this.innerCursor.style.opacity = '0';
    }
  }
  private onVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      this.addMouseMoveListener();
    } else {
      this.removeMouseMoveListener();
    }
  }
}
