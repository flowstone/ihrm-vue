import Mock from 'mockjs'
import TableAPI from './table'
import ProfileAPI from './profile'
import LoginAPI from './login'
import CompanyAPI from './company';

//此文件是模板数据接口拦截规则

Mock.setup({
  //timeout: '1000'
})

Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
Mock.mock(/\/frame\/profile/, 'post', ProfileAPI.profile)
Mock.mock(/\/frame\/login/, 'post', LoginAPI.login)

//配置模拟数据接口
//Mock.mock(/\/company/,'get', CompanyAPI.list);
//Mock.mock(/\/company\/+/, 'get', CompanyAPI.sassDetail);


