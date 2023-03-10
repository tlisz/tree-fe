import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { Node } from '../node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  nodes: Node[];
  value: number;
  parent: number;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes(): void {
    this.nodeService.getNodes()
      .subscribe(nodes => this.nodes = nodes);
  }

  createNode(value: number, parent: number): void {
    if (!value) { return; }
    this.nodeService.createNode({ value, parent } as Node)
      .subscribe(node => {
        this.nodes.push(node);
      });
  }

  updateNode(updatedNode: Node): void {
    const index = this.nodes.findIndex(node => node.id === updatedNode.id);
    if (index !== -1) {
      this.nodes[index] = updatedNode;
    }
  }

  deleteNode(deletedNode: Node): void {
    const index = this.nodes.findIndex(node => node.id === deletedNode.id);
    if (index !== -1) {
      this.nodes.splice(index, 1);
    }
  }

  onSubmit(): void {
    this.createNode(this.value, this.parent);
  }
}
