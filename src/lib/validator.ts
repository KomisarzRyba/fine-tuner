import { spawn } from 'child_process';

const pythonProcess = spawn('python3', ['./src/lib/data-format.py']);

pythonProcess.stdout.on('data', (data) => {
	console.log(data.toString());
});
