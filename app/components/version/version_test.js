'use strict';

describe('firebaseApp.version module', function() {
  beforeEach(module('firebaseApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
