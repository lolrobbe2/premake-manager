import("@octokit/core");

import { Octokit } from '@octokit/core';
import * as vscode from 'vscode';


export class GithubUtils 
{
  // Retrieve the repository URL from the VS Code configuration
    public static getRepoUrl(): string {
        return vscode.workspace.getConfiguration().get<string>('premake.repository', 'https://github.com/premake/premake')!;
    }
    public static extractRepoInfo(url: string): { owner: string; repo: string } | null {
    const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);
    if (match) {
        return { owner: match[1], repo: match[2] };
    } else {
        return null;
    }
    }
    // Fetch releases from the specified GitHub repository
    public static async getReleases() {
        const octokit = new Octokit({
        });
        const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
            owner: 'premake',
            repo: 'premake-core',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        const releases = response.data.map((release: any) => ({
                name: release.name,
                assets: release.assets.map((asset: any) => ({
                    name: asset.name,
                    download_link: asset.browser_download_url,
                })),
            }));
        return releases;
    }
}
