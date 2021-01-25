import {createAPI, createFileAPI} from '@/utils/request';

export const organList = data => createAPI('/company/departments/findAll', 'get', data);
export const add = data => createAPI('/company/departments/save', 'post', data);
export const update = data => createAPI('/company/departments/update', 'put', data);
export const detail = data => createAPI(`/company/departments/findById/${data.id}`, 'get', data);

export const remove = data => createAPI(`/company/departments/delete/${data.id}`, 'delete', data);

export const changeDept = data => createAPI(`/company/departments/changeDept`, 'put', data);

export const saveOrUpdate = data => {return data.id?update(data):add(data)};
