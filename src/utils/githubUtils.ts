import("@octokit/core");

import { Octokit } from '@octokit/core';
import * as vscode from 'vscode';

export interface ReleaseAsset {
    name: string;
    download_link: string;
}

export interface Release {
    name: string | null;
    assets: ReleaseAsset[];
}
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
    public static async getReleases() : Promise<Release[]> {
        const octokit = new Octokit({
        });
        const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
            owner: 'premake',
            repo: 'premake-core',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        const releases: Release[] = response.data.map((release: any) => ({
                name: release.name,
                assets: release.assets.map((asset: any) => ({
                    name: asset.name,
                    download_link: asset.browser_download_url,
                })),
            }));
        return releases;
    }

    public static async getVersionRelease(version: string): Promise<object | undefined> {
        const releases = await this.getReleases();
        const release = releases.find((release: any) => release.name === version);
        if (release) {
            return release;
        } else {
            console.error(`Release with version ${version} not found.`);
            return undefined;
        }
    }
}