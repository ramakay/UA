import asyncComponent from './lib/asyncComponent';
export const App = asyncComponent('App',() => import(/* webpackChunkName: "App" */'./pages/App'));
export const Vote = asyncComponent('Vote', () => import(/* webpackChunkName: "Vote" */'./pages/vote'));
export const Dashboard = asyncComponent('Dashboard', () => import(/* webpackChunkName: "Dashboard" */'./pages/dashboard'));
export const About = asyncComponent('About',() => import(/* webpackChunkName: "About" */'./pages/About'));
export const LoginOrRegister = asyncComponent('LoginOrRegister',() => import(/* webpackChunkName: "LoginOrRegister" */'./pages/LoginOrRegister'));