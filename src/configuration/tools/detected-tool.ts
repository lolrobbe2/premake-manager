import { execFile } from "node:child_process";
import { promisify } from "node:util";
import * as path from "node:path";

const execFileAsync = promisify(execFile);

export interface DetectedTool {
  command: string;
  version: string;
}

export interface BuildTools {
  make?: DetectedTool;
  ninja?: DetectedTool;
  msbuild?: DetectedTool;
}

export async function detectCommand(
  command: string,
  args: string[] = ["--version"],
): Promise<DetectedTool | undefined> {
  try {
    const result = await execFileAsync(command, args, {
      timeout: 5000,
      windowsHide: true,
    });

    const output = `${result.stdout}\n${result.stderr}`.trim();

    return {
      command,
      version: output.split(/\r?\n/, 1)[0] || "Available",
    };
  } catch {
    return undefined;
  }
}

async function findVisualStudioMsBuild(): Promise<string | undefined> {
  if (process.platform !== "win32") {
    return undefined;
  }

  const programFiles = process.env["ProgramFiles(x86)"];

  if (programFiles === undefined) {
    return undefined;
  }

  const vswhere = path.join(
    programFiles,
    "Microsoft Visual Studio",
    "Installer",
    "vswhere.exe",
  );

  try {
    const result = await execFileAsync(
      vswhere,
      [
        "-latest",
        "-products",
        "*",
        "-requires",
        "Microsoft.Component.MSBuild",
        "-find",
        "MSBuild\\Current\\Bin\\MSBuild.exe",
      ],
      {
        timeout: 5000,
        windowsHide: true,
      },
    );

    return result.stdout.trim().split(/\r?\n/, 1)[0] || undefined;
  } catch {
    return undefined;
  }
}

async function detectMsBuild(): Promise<DetectedTool | undefined> {
  // Prefer Visual Studio's MSBuild installation.
  const visualStudioMsBuild = await findVisualStudioMsBuild();

  if (visualStudioMsBuild !== undefined) {
    return detectCommand(visualStudioMsBuild, ["-version", "-nologo"]);
  }

  // Fall back to MSBuild available on PATH.
  const msbuild = await detectCommand("msbuild", ["-version", "-nologo"]);

  if (msbuild !== undefined) {
    return msbuild;
  }

  // Fall back to MSBuild bundled with the .NET SDK.
  const dotnetMsBuild = await detectCommand(
    "dotnet",
    ["msbuild", "-version", "-nologo"],
  );

  if (dotnetMsBuild !== undefined) {
    return {
      ...dotnetMsBuild,
      command: "dotnet msbuild",
    };
  }

  return undefined;
}

export async function detectBuildTools(): Promise<BuildTools> {
  const [make, ninja, msbuild] = await Promise.all([
    detectCommand("make"),
    detectCommand("ninja"),
    detectMsBuild(),
  ]);

  return {
    make,
    ninja,
    msbuild,
  };
}
