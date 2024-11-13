function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(name));
  }
   
  function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(name));
  }
   
  function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(name));
  }
   
  function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
  }
  