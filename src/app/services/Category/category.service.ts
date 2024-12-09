import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Category } from 'src/app/interface';
import { Observable } from 'rxjs'
const apiUrl = 'http://localhost:8080/api/category'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get<any>(apiUrl);
  }
  create(formData: FormData): Observable<any> {
    return this.http.post(apiUrl, formData);
  }
  delete(Id: any): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${Id}`);
  }
  update(id: string, data: Category): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }
}
