import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:
    {
      path: 'flights',
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'mfe1',
          exposedModule: './Module'
        }).then(m => m.FlightsModule)

        // loadChildren: () =>
        //   loadRemoteModule({
        //     type: 'module',
        //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
        //     exposedModule: './Module'
        //   }).then(m => m.FlightsModule)    },

        // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

