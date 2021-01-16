// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {translate, translateReplace } = require('./functions');
// import {transRightClick} from './functions'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "htn-v3" is now active!');

	//hover 
	vscode.languages.registerHoverProvider('python', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);
			const translated = translate(word);
            return new vscode.Hover(translated);
        }
    });

	// Sidebar
	
    
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('htn-v3.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HTN V3!');
	});

	let disposable3 = vscode.commands.registerCommand('htn-v3.FAITH', translateReplace);

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable3);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
