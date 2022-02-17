import { Response } from '../Types/api';

import { HttpClientModel } from "./model";

export class HttpClient implements HttpClientModel {
  private response = {} as Response;
  constructor(private readonly baseUrl: string) {}
  public async get <T extends unknown, R extends unknown>(baseUrl: string, body?: T): Promise<R> {
    // @TODO
  }

  public async post <T extends unknown, R extends unknown>(baseUrl: string, body?: T): Promise<R> {
    // @TODO
  }

  public async put <T extends unknown, R extends unknown>(baseUrl: string, body?: T): Promise<R> {
    // @TODO
  }

  public async delete<T extends unknown, R extends unknown>(baseUrl: string, body?: T): Promise<R> {
    // @TODO
  }
}
