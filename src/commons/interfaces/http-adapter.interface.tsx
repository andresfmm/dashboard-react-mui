
export interface IHttpAdapter {

    get<T>( url: string ): Promise<T>

    post<T>( url: string, payload: any ): Promise<T>

    put<T>(  url: string, payload: any ): Promise<T>

    patch<T>( url: string ): Promise<T>

    delete<T>( url: string ): Promise<T>
}