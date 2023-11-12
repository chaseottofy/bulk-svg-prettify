import commands from './commands';

function logHelp() {
  console.log('Usage: tst [options]');
  console.log('Options:');
  for (const [key, value] of Object.entries(commands)) {
    const { alias, describe, example } = value;
    console.log(`  -${key}, --${alias}\t${describe}`);
    console.log(`\t\t\tExample: tst ${example}`);
  }
}

export default logHelp;
