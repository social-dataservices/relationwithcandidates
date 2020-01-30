function createRelationWithCandidatesService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function RelationWithCandidatesService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(RelationWithCandidatesService, factoryCreator, require('./storagedescriptor'));
  
  RelationWithCandidatesService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  RelationWithCandidatesService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return RelationWithCandidatesService;
}

module.exports = createRelationWithCandidatesService;
