const initialEdges = [
  { id: '1-2', source: '1', target: '2', label: 'включает в себя'},
  { id: '1-13', source: '1', target: '13', label: 'оптимизируется для'},
  { id: '2-3', source: '2', target: '3', label: 'зависит от'},
  { id: '3-4', source: '3', target: '4', label: 'включает в себя'},
  { id: '4-11', source: '4', target: '11', label: 'используется в сочетании с'},
  { id: '11-9', source: '11', target: '9', label: 'включает в себя'},
  { id: '11-10', source: '11', target: '10', label: 'включает в себя'},
  { id: '9-5', source: '9', target: '5', label: 'основан на'},
  { id: '10-6', source: '10', target: '6', label: 'основан на'},
  { id: '11-7', source: '11', target: '7', label: 'включает в себя'},
  { id: '11-8', source: '11', target: '8', label: 'включает в себя'},
  { id: '13-16', source: '13', target: '16', label: 'характеризует'},
  { id: '13-14', source: '13', target: '14', label: 'требует'},
  { id: '14-15', source: '14', target: '15', label: 'зависит от'},
  { id: '13-12', source: '13', target: '12', label: 'зависит от'},
  { id: '12-9', source: '12', target: '9', label: 'используется в'},
  { id: '12-10', source: '12', target: '10', label: 'используется в'},
];

export default initialEdges;