module.exports = {
  indices: [{
    fields: ['initiator']
  },{
    fields: ['target']
  },{
    fields: ['initiator', 'target'],
    unique: true
  }],
  record:{
    fields:[{
      name: 'initiator',
      type: 'string'
    },{
      name: 'target',
      type: 'string'
    },{
      name: 'initiationtimestamp',
      type: 'number'
    },{
      name: 'acceptancetimestamp',
      type: 'number'
    },{
      name: 'bilateral',
      type: 'boolean'
    }]
  }
};
