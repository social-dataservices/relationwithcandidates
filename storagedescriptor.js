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
      name: 'initiationreference',
      type: 'string'
    },{
      name: 'acceptancetimestamp',
      type: 'number'
    },{
      name: 'acceptancereference',
      type: 'string'
    },{
      name: 'bilateral',
      type: 'boolean'
    }]
  }
};
