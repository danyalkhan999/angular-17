import { VariableBinding } from '@angular/compiler';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  standalone: true
})
export class NgxUnlessDirective {
  visible = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { 
    console.log("trmp", templateRef);
    console.log("view", viewContainer);
  }


  @Input()
  set ngxUnless(condition: any){
    if(!condition && !this.visible) {
      console.log("12321");
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    }else if(condition && this.visible){
      console.log("123457648");
      this.viewContainer.clear();
      this.visible = false
    }
  }

}
