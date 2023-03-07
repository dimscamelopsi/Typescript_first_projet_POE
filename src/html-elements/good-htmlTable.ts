export class HTMLTable {
    private tableEl: HTMLTableElement = document.createElement('table')

    private tableContent: Array<string> = []

    public setTableContent (content: Array<string>): void {
        this.tableContent = content
    }

    public build(): HTMLTableElement {
        // Loop over content to create rows and cells
        for(const content of this.tableContent) {
            // First create a row
            const row: HTMLTableRowElement = document.createElement('tr')
            // Then create td
            const divider: HTMLTableCellElement = document.createElement('td')
            // Put content in divider
            divider.textContent = content
            // Add divider to row
            row.appendChild(divider)
            //Add row to table
            this.tableEl.appendChild(row)
        }
        return this.tableEl
    }
}