export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
      
        config.map([
          { route: ['','home'],
              name: 'home',
              moduleId: 'home',
              nav: true,
              title:'Home' },
      
          { route: 'bindingdemo',
              name: 'bindingdemo',
              moduleId: 'binding-demo',
              nav: true,
              title:'Binding Demo' }
        ]);
      
        this.router = router;
    }
}