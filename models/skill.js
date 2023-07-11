const skills = [
    {id: 125223, skill: 'Javascript', learned: true},
    {id: 127904, skill: 'HTML', learned: false},
    {id: 139608, skill: 'CSS', learned: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }