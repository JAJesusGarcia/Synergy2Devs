import { exec } from 'child_process';
import open from 'open';

const viteProcess = exec('vite');

viteProcess.stdout.on('data', (data) => {
  if (data.includes('Local:')) {
    const urlMatch = data.match(/http:\/\/localhost:\d+/);
    if (urlMatch) {
      const url = urlMatch[0];
      open(url);
    }
  }
});

viteProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

// "start": "node silent-start.js",
