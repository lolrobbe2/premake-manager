(function () {
    const vscode = acquireVsCodeApi();
    vscode.postMessage({
        type: 'search',
        value: "test"
    });
    const searchInput = /** @type {HTMLElement} */ document.getElementById('module-search');
    console.log("hello");
    console.log(searchInput)
    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            vscode.postMessage({
                type: 'search',
                // @ts-ignore
                value: searchInput?.value
            });
        }   
    });

    const filterButton = document.getElementById('filter-button');
    const filterPanel = document.getElementById('filter-panel');

    if(filterButton) {
        filterButton.addEventListener('click', () => {
            // @ts-ignore
            if (filterPanel) {
                filterPanel.hidden = !filterPanel.hidden;
            }
        });
    }
    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-type');

            vscode.postMessage({
                type: 'setSearchType',
                value: type
            });
            if(filterPanel) {
                filterPanel.hidden = true
            }
        });
    });
}());