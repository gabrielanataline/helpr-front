import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  public findAll(): Observable<Cliente[]> {    //busca de todos os clientes 
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de clientes");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(cliente: Cliente): Observable<Cliente> { // cria um novo cliente 
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente).pipe(
      catchError(error => {
        alert("Erro ao criar novo cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Cliente> {      //deletar cliente por id 
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, cliente).pipe(
      catchError(error => {
        alert("Erro ao editar cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}