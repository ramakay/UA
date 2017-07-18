import syncComponent from '../lib/syncComponent';

export const App = syncComponent('App', require('../app/containers/App'));
export const Vote = syncComponent('Vote', require('../app/containers/Vote'));
export const Dashboard = syncComponent('Dashboard', require('../app/containers/Dashboard'));
export const About = syncComponent('About', require('../app/containers/About'));
export const LoginOrRegister = syncComponent('LoginOrRegister', require('../app/containers/LoginOrRegister'));