import { ID, instance } from '../common/constants/instance'

export const appAPI = {
  getTreeRows() {
    return instance.get(`v1/outlay-rows/entity/${ID}/row/list`)
  },
  createRowInEntity() {
    return instance.post(`v1/outlay-rows/entity/${ID}/row/create`)
  },
}
