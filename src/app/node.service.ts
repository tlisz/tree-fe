import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Node } from './node';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private baseUrl = 'http://localhost:8080/nodes';

  constructor(private http: HttpClient) { }

  createNode(node: Node): Observable<any> {
    return this.http.post(`${this.baseUrl}`, node.value);
  }

  getNode(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateNode(id: number, value: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, { value: value });
  }

  deleteNode(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getNodes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
