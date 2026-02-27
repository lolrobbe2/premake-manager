import * as vscode from "vscode";

export class Prompt {
  /**
   * Prompt the user with a Yes or No prompt
   * @param prompt to show the user
   * @return boolean
   * - True on success
   * - False when declined
   * - False on timeout
   */
  static async Pass(prompt: string): Promise<boolean> {
    return (
      (await vscode.window.showInformationMessage(prompt, "Yes", "No")) == "Yes"
    );
  }

  /**
   * Shows an information message to the user.
   * @param message to show the user
   */
  static async Info(message: string) {
    vscode.window.showInformationMessage(message);
  }

  /**
   * Shows a warning message to the user.
   * @param warning to show the user
   */
  static async Warning(warning: string) {
    vscode.window.showWarningMessage(warning);
  }

  /**
   * Shows a error to the user.
   * @param error to show the user
   */
  static async Error(error: string) {
    console.error(error);
    vscode.window.showErrorMessage(error);
  }

  /**
   * Shows a quikPicker to the user where a Single option can be selected
   * @param options to selct from see vscode.QuickPickItem for more info
   * @param placeHolder for the quickPicker
   * @returns vscode.QuickPickItem that was selected
   */
  static async Select(
    options: vscode.QuickPickItem[],
    placeHolder: string | undefined = undefined,
  ): Promise<vscode.QuickPickItem | undefined> {
    return vscode.window.showQuickPick(options, {
      placeHolder: placeHolder,
      canPickMany: false,
    });
  }

  /**
   * Shows a quikPicker to the user where Multiple options can be selected.
   * @param options to selct from see vscode.QuickPickItem for more info
   * @param placeHolder for the quickPicker
   * @returns vscode.QuickPickItem that was selected
   */
  static async SelectMany(
    options: vscode.QuickPickItem[],
    placeHolder: string | undefined = undefined,
  ): Promise<vscode.QuickPickItem[] | undefined> {
    return vscode.window.showQuickPick(options, {
      placeHolder: placeHolder,
      canPickMany: true,
    });
  }

  static async Text(
    prompt: string,
    placeHolder: string = "Enter your text here...",
  ): Promise<String | undefined> {
    return await vscode.window.showInputBox({
      prompt: prompt,
      placeHolder: placeHolder,
    });
  }
  static async Progress<T>(
    title: string,
    task: (
      reporter: vscode.Progress<{ message?: string; increment?: number }>,
    ) => Promise<T>,
  ): Promise<T> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: title,
        cancellable: false,
      },
      async (progress) => {
        return await task(progress);
      },
    );
  }
}
