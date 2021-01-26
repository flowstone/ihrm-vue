import Layout from '@/module-dashboard/pages/layout';
const _import = require('@/router/import_' + process.env.NODE_ENV);

export default [
    {
        root: true,
        path: '/employees',
        component: Layout,
        redirect: 'noredirect',
        name: 'employees',
        meta: {
            title: '员工管理',
            icon: 'international'
        },
        children:[
            {
                path: 'index',
                name: 'employees-index',
                component: _import('employees/pages/index'),
                meta: {
                    title: '员工管理',
                    icon: 'international',
                    noCache: true
                }
            },
            {
                path: 'details/:id',
                name: 'employees-details',
                component: _import('employees/pages/details'),
                meta: {
                    title: '详情',
                }
            }    
        ]
    }
];