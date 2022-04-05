import { doSpawn } from 'builder-util';

const arg = require('arg');
const fs = require('fs');
const path = require('path')
const shell = require('shelljs');

function buildProject(type, lang, dir, name){
    fs.mkdirSync(path.join(dir,name));
    var inFolderDir = path.join(dir,name);
    shell.cd(inFolderDir);
    shell.exec('npm init');

    fs.writeFileSync('index.js');
    var gulp = `
        const gulp = require('gulp');
        const {src,dest} = require('gulp');
        const sourcemaps = require('gulp-sourcemaps');
        const concat = require('gulp-concat');
        const css = require('gulp-clean-css');
        
    `
    
}

export function cli(args) {
  function parseArgumentsForDataConfig(rawArgs) {
    const args = arg(
      {
        '--help': Boolean,
        '--init': String,
        '--lang': String,
        '--name': String,
        '--nopack': Boolean,
        '-np': '--nopack',
        '-n': '--name',
        '-l': '--lang',
        '-h': '--help',
        '-i': '--init',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      help: args['--help'] || false,
      init: args['--init'] || 'empty',
      lang: args['--lang'] || 'JS',
      nopack: args['--nopack'] || false
    };
  }

  const agrc = parseArgumentsForDataConfig(args);
  if (agrc.help) {
    console.log('pad-ml attributes:');
    console.log(
      '--init, -i: Create a initial nodejs project, default is empty project with no template, project types: console, express-web, neural-network, webassembly, empty',
      '--lang, -l: set the language used on node: JS -> as Javascript amd TS -> as typescript'
    );
  }

  const dir = process.cwd();
  if(args.init == 'empty'){
      
  }

  console.log(args);
}