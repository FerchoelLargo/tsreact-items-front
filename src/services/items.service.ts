import http from "../http-common";
import {ItemData} from "../models/items.type";
const path = "items/"
class ItemDataService {
  getAll() {
    return http.get<Array<ItemData>>(`${path}`);
  }

  get(id: string) {
    return http.get<ItemData>(`${path}${id}`);
  }

  create(data: ItemData) {
    return http.post<ItemData>(path, data);
  }

  update(data: ItemData, id: any) {
    return http.put<any>(`${path}${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`${path}${id}`);
  }

  deleteAll() {
    return http.delete<any>(`${path}`);
  }

  findByName(name: string) {
    return http.get<Array<ItemData>>(`${path}?name=${name}`);
  }

  findByUnique(unique: string) {
    console.log(`${path}?uniqueValue=${unique}`)
    return http.get<Array<ItemData>>(`${path}?sys_id=${unique}`);
  }

}

export default new ItemDataService();