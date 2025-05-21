import { exec } from "child_process";
import * as os from "os";
import * as vscode from "vscode";
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
}
