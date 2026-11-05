#!/usr/bin/env node
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const cleanArgs = [];

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--host') {
    cleanArgs.push('-H');
    if (i + 1 < args.length && !args[i + 1].startsWith('-')) {
      cleanArgs.push(args[++i]);
    }
  } else if (arg.startsWith('--host=')) {
    cleanArgs.push('-H', arg.slice('--host='.length));
  } else {
    cleanArgs.push(arg);
  }
}

if (!cleanArgs.includes('-H') && !cleanArgs.includes('--hostname')) {
  cleanArgs.push('-H', '0.0.0.0');
}
if (!cleanArgs.includes('-p') && !cleanArgs.includes('--port')) {
  cleanArgs.push('-p', '3000');
}

const child = spawn('npx', ['next', 'dev', ...cleanArgs], {
  stdio: 'inherit'
});

process.on('SIGINT', () => child.kill('SIGINT'));
process.on('SIGTERM', () => child.kill('SIGTERM'));

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
