import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';
import { Store } from '@ngrx/store';
import { State } from '@app/examples/examples.state';
import { ActionBooksLikeOne } from '@app/examples/crud/books.actions';
import { Logo } from '@app/examples/crud/books.model';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g class="nodeG" [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:image
          class="node"
          [attr.xlink:href]="node.img"
          x="-25"
          y="-25"
          [attr.height]="(node.niveau + 1)*25"
          [attr.width]="(node.niveau + 1)*25"
          (click)="click()">
      </svg:image>
      <svg:text
          class="node-name"
          y="-35"
          [attr.font-size]="node.fontSize">
        {{node.label}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  constructor(public store: Store<State>){

  }
  click(){
    console.log("clickTest")
    this.store.dispatch(new ActionBooksLikeOne(new Logo(this.node.id,this.node.label,this.node.img,this.node.niveau)))
  }

}
