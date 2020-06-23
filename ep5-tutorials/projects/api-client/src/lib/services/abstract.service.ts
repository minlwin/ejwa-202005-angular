import { HttpClient, HttpParams } from '@angular/common/http'

export abstract class AbstractService {

    protected abstract get api(): string

    constructor(protected http: HttpClient) { }

    save(data: any) {
        return data.id ? this.http.put<any>(this.api, data) : this.http.post(this.api, data)
    }

    findAll() {
        return this.http.get<any[]>(this.api)
    }

    search(form: any) {
        let param = new HttpParams

        for (let key in form) {
            param = param.append(key, form[key])
        }

        return this.http.get<any[]>(`${this.api}/search`, { params: param })
    }
}
