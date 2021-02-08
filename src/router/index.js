import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutAuth from '@/layouts/Auth';
import LayoutDefault from '@/layouts/Default';
import Login from '@/views/Login';
import Register from '@/views/Register';
import VerifyEmail from '@/views/VerifyEmail';
import ForgotPassword from '@/views/ForgotPassword';

/*
import Home from '@/views/Home';
import ResetPassword from '@/views/ResetPassword';
import Guard from '@/service/middleware';
import Profile from '@/views/Profile';
import TodoTasks from '@/views/TodoTasks';
*/

Vue.use(VueRouter);

const routes = [
    {
        path: '/login', component: LayoutAuth,
        children: [
            { path: '', name: 'login', component: Login },
        ],
    },
    {
        path: '/registro', component: LayoutAuth,
        children: [
            { path: '', name: 'register', component: Register },
        ],
    },
    {
        path: '/verificar-email', component: LayoutAuth,
        children: [
            { path: '', name: 'verifyEmail', component: VerifyEmail },
        ],
    },
    {
        path: '/esqueci-senha', component: LayoutAuth,
        children: [
            { path: '', name: 'forgotPassword', component: ForgotPassword },
        ],
    },

    /*{
        path: '/', component: LayoutDefault,
        beforeEnter: Guard.redirectIfNotAuthenticated,
        children: [
            { path: '', name: 'index', component: Home },
            { path: 'perfil', name: 'profile', component: Profile },
            { path: 'todo/:id', name: 'todo-tasks', component: TodoTasks },
        ],
    },
    {
        path: '/login', component: LayoutAuth,
        beforeEnter: Guard.redirectIfAuthenticated,
        children: [
            { path: '', name: 'login', component: Login },
        ],
    },
    
    {
        path: '/recuperar-senha', component: LayoutAuth,
        children: [
            { path: '', name: 'resetPassword', component: ResetPassword },
        ],
    },*/

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
