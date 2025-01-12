export class terminalCommands{
    public static determineCommand(){
        vscode.window.onDidWriteTerminalData(async event => {
    // Check if the output contains the specified command
    if (event.data.includes('your-command')) {
      // Perform the corresponding action
      await yourActionFunction();
    }
  });
    }
}