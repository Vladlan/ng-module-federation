// import('./bootstrap')                                                      #1
// 	.catch(err => console.error(err));

// import { loadRemoteEntry } from '@angular-architects/module-federation';   #2
import { loadManifest } from '@angular-architects/module-federation';

loadManifest('assets/mf.manifest.json')
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

// Promise.all([                                                              #2
//   loadRemoteEntry({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//   }),
// ])
//   .catch((err) => console.error('Error loading remote entries', err))
//   .then(() => import('./bootstrap'))
//   .catch((err) => console.error(err));
