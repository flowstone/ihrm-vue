import { createAPI } from '@/utils/request';

export const list = data => createAPI('/sys/user/findByPage','get', data);
//export const simple = data => createAPI('/sys/user/simple')
export const add = data => createAPI('/sys/user/add', 'post', data);
export const update = data => createAPI('/sys/user/update', 'put', data);
export const remove = data => createAPI(`/sys/user/delete/${data.id}`, 'delete', data);
export const detail = data => createAPI(`/sys/user/findById/${data.id}`, 'get', data);

