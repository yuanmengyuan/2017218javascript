import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

export default {
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/contact',
            component:Contact
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'*',
            component:Home
        }
    ]
}
