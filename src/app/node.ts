export interface Node {
  id?: number;
  value: number;
  parent?: number;
  children?: Node[];
}
