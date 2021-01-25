import Layout from '@/module-dashboard/pages/layout';
const _import = require('@/router/import_' + process.env.NODE_ENV);

export default [
    {
        root: true,
        path: '/saas-clients',
        component: Layout,
        redirect: 'noredirect',
        name: 'saas-clients',
        meta: {
            title: 'Saas企业管理',
            icon: 'international'
        },
        children:[
            {
                path: 'index',
                name: 'saas-clients-index',
                component: _import('saas-clients/pages/index'),
                meta: {
                    title: 'Saas企业',
                    icon: 'international',
                    noCache: true
                }
            },
            {
                path: 'details/:id',
                name: 'saas-client-details',
                component: _import('saas-clients/pages/details'),
                meta: {
                    title: 'Saas企业详情',
                    icon: 'international',
                    noCache: false
                }
            }

        ]
    }
];