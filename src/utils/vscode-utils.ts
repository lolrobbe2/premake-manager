import { exec } from "child_process";
import * as os from "os";
import * as vscode from "vscode";
import { Prompt } from "./prompt-utils";
export class EnvironmentRefresher {

    /** */
    public static async refreshWindowsPath(): Promise<void> {
 
        return new Promise((resolve, reject) => {
            const platform = os.platform();

            let command: string;

            if (platform === "win32") {
                // Windows: Combine Machine and User PATH
                command = `powershell.exe -NoProfile -Command "& {[Environment]::GetEnvironmentVariable('PATH', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('PATH', 'User')}"`;
            } else {
                // Unix: Launch a login shell and print updated PATH
                command = `bash -ilc 'echo $PATH'`; // works for bash, adjust if user uses zsh or other
            }

            exec(command, (error, stdout) => {
                if (error) {
                    reject(new Error(`Failed to retrieve PATH: ${error.message}`));
                    return;
                }

                const newPath = stdout.trim();
                if (newPath.length > 0) {
                    process.env['Path'] = newPath;
                    resolve();
                } else {
                    reject(new Error("Failed to retrieve a non-empty PATH."));
                }
            });
        });
    }


    public static async updateWindowsTerminalProfileEnv(): Promise<void> {
        try {
            // Refresh the PATH from the system
            await EnvironmentRefresher.refreshWindowsPath();

            // Get the new path from process.env (updated by refreshWindowsPath)
            const newPath = process.env['Path'] || process.env['PATH'];

            if (!newPath) {
                Prompt.Error("Failed to retrieve updated PATH.");
                return;
            }

            // Get the current terminal env overrides for Windows
            const config = vscode.workspace.getConfiguration();
            const terminalEnv = config.get<{ [key: string]: string }>("terminal.integrated.env.windows") || {};

            // Update PATH in terminal env overrides
            const updatedEnv = { ...terminalEnv, PATH: newPath };

            // Save the updated env globally
            await config.update("terminal.integrated.env.windows", updatedEnv, vscode.ConfigurationTarget.Global);

            Prompt.Info(
                "Windows terminal environment updated. Please restart the integrated terminal to apply changes."
            );
        } catch (error) {
           Prompt.Error(`Error updating terminal environment: ${error instanceof Error ? error.message : error}`);
        }
    }

}
