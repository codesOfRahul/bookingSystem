import { Component, ElementRef, Renderer2 ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.css']
})
export class CustomeDirectiveComponent implements OnInit {
  @Input() spacing = '4px';
  isTableHidden = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyStyles();
    this.toggleTable(); // Handle the initial state in ngOnInit
  }

  private applyStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'border-collapse', 'separate');
    this.renderer.setStyle(this.el.nativeElement, 'border-spacing', this.spacing);
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.addClass(this.el.nativeElement, 'table'); // Apply additional styles or classes
  }

  toggleTable() {
    this.isTableHidden = !this.isTableHidden;
  }
}
