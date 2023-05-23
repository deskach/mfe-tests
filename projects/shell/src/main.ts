// import { loadRemoteEntry } from '@angular-architects/module-federation';
import { loadManifest } from '@angular-architects/module-federation';

import('./bootstrap')
  .catch(err => console.error(err));

Promise.all([
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//   }),
  loadManifest('assets/mf.manifest.json')
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
