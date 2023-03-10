import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;
  @Output() nodeUpdated = new EventEmitter<Node>();
  @Output() nodeDeleted = new EventEmitter<Node>();

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
  }

  updateNode(): void {
    if (this.node.id !== undefined && this.node.value !== undefined) {
      this.nodeService.updateNode(this.node.id, this.node.value)
        .subscribe(
          () => console.log('Node updated successfully'),
          error => console.error('Error updating node: ', error)
        );
    } else {
      console.error('Node id or value is undefined');
    }

  }

  deleteNode(): void {
    this.nodeService.deleteNode
  }
}
