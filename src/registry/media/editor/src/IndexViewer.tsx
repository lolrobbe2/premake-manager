import { useEffect, useMemo, useState } from "react";
import type { IndexView } from "./IndexTypes";
import './IndexViewer.css';
import { OwnerLibs } from "./OwnerGroup";

interface LibraryIndexProps {
    indexPromise: Promise<IndexView>;
    filter: string; // The new filter prop
}

export function IndexViewer({ indexPromise, filter }: LibraryIndexProps) {
    const [index, setIndex] = useState<IndexView | null>(null);

    useEffect(() => {
        (async () => {
            const data = await indexPromise;
            setIndex(data);
        })();
    }, [indexPromise]);
    const isFiltering = filter.trim().length > 0;
    // Filter logic: Only keep libs that match the string, 
    // and only keep owners that have at least one matching lib.
    const filteredIndex = useMemo(() => {
        if (!index) return null;
        if (!filter.trim()) return index.libraries;

        const searchTerm = filter.toLowerCase();
        const filtered: Record<string, any> = {};

        Object.entries(index.libraries).forEach(([owner, libs]) => {
            const matchedLibs = libs.filter(lib =>
                lib.name.toLowerCase().includes(searchTerm) ||
                owner.toLowerCase().includes(searchTerm) || filter === ''
            );

            if (matchedLibs.length > 0) {
                filtered[owner] = matchedLibs;
            }
        });

        return filtered;
    }, [index, filter]);

    if (!index || !filteredIndex) {
        return (
            <div className="loading-container">
                <vscode-progress-ring></vscode-progress-ring>
            </div>
        );
    }

    return (
        <section className="index-content">
            {Object.entries(filteredIndex).map(([owner, libs]) => (
                <OwnerLibs key={owner} ownerName={owner} libs={libs} isFiltering={isFiltering} />
            ))}

            {/* Show a message if nothing matches the filter */}
        </section>
    );
}