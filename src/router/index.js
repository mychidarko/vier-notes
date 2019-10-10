import Vue from 'vue';
import Router from 'vue-router';
import Index from './../pages/Index';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import Home from './../pages/Home';
import Category from './../pages/Category';
import Categories from './../pages/Categories';
import AddNote from './../pages/AddNote';
import Note from './../pages/Note';
import Authors from './../pages/Authors';
// import Author from './../pages/Author';
import Search from './../pages/Search';
import Library from './../pages/Library';
// import Collection from './../pages/Collection';
// import Home from './../pages/Home';
// import Profile from './../pages/Profile';
import NotFound from './../pages/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/auth/login', name: 'Login', component: Login },
    { path: '/auth/register', name: 'Register', component: Register },
    { path: '/home', name: 'Home', component: Home },
    { path: '/categories', name: 'Categories', component: Categories },
    { path: '/categories/:category', name: 'Category', component: Category },
    { path: '/add', name: 'AddNote', component: AddNote },
    { path: '/note/:id', name: 'Note', component: Note },
    { path: '/authors/', name: 'Authors', component: Authors },
    // { path: '/authors/:id', name: 'Author', component: Author },
    { path: '/search', name: 'Search', component: Search },
    { path: '/library', name: 'Library', component: Library },
    // { path: '/library/:collection', name: 'Collection', component: Collection },
    // { path: '/profile', name: 'Profile', component: Profile }
    { path: '*', name: 'NotFound', component: NotFound }
  ]
});
