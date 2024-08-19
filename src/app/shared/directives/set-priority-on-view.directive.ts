import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  OnInit,
  Renderer2,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appSetPriorityOnView]',
})
export class SetPriorityOnViewDirective implements OnInit, OnDestroy {
  @Output() visible = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visible.emit(true);
          this.renderer.setAttribute(this.el.nativeElement, 'priority', 'high');
        } else {
          this.visible.emit(false);
          this.renderer.removeAttribute(this.el.nativeElement, 'priority');
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
