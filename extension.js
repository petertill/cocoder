// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const fs = require('fs');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	vscode.window.showInformationMessage('Hey! My name is CoCoder and I will be your personal programming assistant for this session.');

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "cocoder" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cocoder.createHTML', function () {
		// The code you place here will be executed every time your command is executed


		const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <link rel="stylesheet" href="app.css" />
</head>
<body>
  <script src="app.js"></script>
</body>
</html>`;

		if (!vscode.workspace) {
			return vscode.window.showErrorMessage('Please open a project folder first');
		  }
		  
		  const folderPath = vscode.workspace.workspaceFolders[0].uri.toString().split(':')[1];


			fs.writeFile(path.join(folderPath, 'index.html'), htmlContent, (err) => {
				if (err) {
				  return vscode.window.showErrorMessage('Failed to create HTML project!');
				}
				vscode.window.showInformationMessage('Created HTML project!');
			  });

		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from cocoder!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
