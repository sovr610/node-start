const arg = require('arg');

export function cli(args) {
  function parseArgumentsForDataConfig(rawArgs) {
    const args = arg(
      {
        '--help': Boolean,
        '--init': Boolean,
        '-h': '--help',
        '-i': '--init',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      help: args['--help'] || false,
      init: args['--init'] || false,
    };
  }

  const agrc = parseArgumentsForDataConfig(args);
  if (agrc.help) {
    console.log('pad-ml attributes:');
    console.log(
      '--init, -i: create base enviornment to create the .net library class projects and ML.net models'
    );
  }
  console.log(args);
}