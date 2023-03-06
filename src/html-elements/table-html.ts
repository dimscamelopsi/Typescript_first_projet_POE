import { ListHTML } from "./list-html";


export class TableHtml {

    public buildTable() {
        const listHTML = new ListHTML
        let names = listHTML.getListContent()
        const table = document.createElement('table')
        table.innerHTML = '<thead><tr><th>Names</th><th>FirstName</th></tr></thead>'
        let tbody = document.createElement('tbody')
        table.appendChild(tbody)

            for (const cells in names){
                const cell = document.createElement('tr')
                for (const toto in names){
                const row = document.createElement('td')
                row.textContent = names[toto].name
                console.log(names[toto])
                cell.appendChild(row)
                tbody.appendChild(cell)
                }
                // console.log(names[cells])
            }
            
            
        return table
    }

    // const listHTML = new ListHTML
    //     let names = listHTML.getListContent()
    //     const table = document.createElement('table')
    //     table.innerHTML = '<thead><tr><th>Names</th></tr></thead>'
    //     let tbody = document.createElement('tbody')
    //     table.appendChild(tbody)

    //         for (const cells of names){
    //             const cell = document.createElement('tr')
    //             const row = document.createElement('td')
    //             row.textContent = cells
    //             cell.appendChild(row)
    //             tbody.appendChild(cell)
    //         }
            
    //         console.log(names)
    //     return table
}