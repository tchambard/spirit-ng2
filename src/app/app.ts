import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

// styles
import '../style/modern-business.css';
import '../style/spirit-auth.css';
import '../style/spirit-container.css';
import '../style/spirit-elements.css';


import {API_PROVIDERS} from './services/api/api';


// Layouts
import {NavbarComponent} from './components/site/layout/navbar';
import {FooterComponent} from './components/site/layout/footer';
// Site map
import {HomeComponent} from './components/site/home';
import {NotFoundComponent} from './components/site/404';
import {AboutComponent} from './components/site/about';
import {Blog1Component} from './components/site/blog-home-1';
import {Blog2Component} from './components/site/blog-home-2';
import {BlogPostComponent} from './components/site/blog-post';
import {ContactComponent} from './components/site/contact';
import {FaqComponent} from './components/site/faq';
import {FullWidthComponent} from './components/site/full-width';
import {Portfolio1Component} from './components/site/portfolio-1-col';
import {Portfolio2Component} from './components/site/portfolio-2-col';
import {Portfolio3Component} from './components/site/portfolio-3-col';
import {Portfolio4Component} from './components/site/portfolio-4-col';
import {PortfolioItemComponent} from './components/site/portfolio-item';
import {PricingComponent} from './components/site/pricing';
import {ServicesComponent} from './components/site/services';
import {SidebarComponent} from './components/site/sidebar';

// Account management
import {Auth} from './components/auth/auth';

// Applicative components
import {DashboardComponent} from './components/site/dashboard';




/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  pipes: [],
  template: require('./app.html'),
  providers:  [...FORM_PROVIDERS, API_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, NavbarComponent, FooterComponent]
})

@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/auth/...', name: 'Auth', component: Auth},
  {path: '/404', name: '404', component: NotFoundComponent},
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/blog-1', name: 'Blog1', component: Blog1Component},
  {path: '/blog-2', name: 'Blog2', component: Blog2Component},
  {path: '/blog-post', name: 'BlogPost', component: BlogPostComponent},
  {path: '/contact', name: 'Contact', component: ContactComponent},
  {path: '/faq', name: 'Faq', component: FaqComponent},
  {path: '/full-width', name: 'FullWidth', component: FullWidthComponent},
  {path: '/portfolio-1', name: 'Portfolio1', component: Portfolio1Component},
  {path: '/portfolio-2', name: 'Portfolio2', component: Portfolio2Component},
  {path: '/portfolio-3', name: 'Portfolio3', component: Portfolio3Component},
  {path: '/portfolio-4', name: 'Portfolio4', component: Portfolio4Component},
  {path: '/portfolio-item', name: 'PortfolioItem', component: PortfolioItemComponent},
  {path: '/pricing', name: 'Pricing', component: PricingComponent},
  {path: '/services', name: 'Services', component: ServicesComponent},
  {path: '/sidebar', name: 'Sidebar', component: SidebarComponent},
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent}
])

export class App {
  title: string = 'Spirit';
}
