'use strict';

angular.module('firebaseApp.version', [
  'firebaseApp.version.interpolate-filter',
  'firebaseApp.version.version-directive'
])

.value('version', '0.1');
