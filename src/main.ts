import { HTMLTable } from './html-elements/good-htmlTable'
import { ListHTML } from './html-elements/list-html'
import { TableHtml } from './html-elements/table-html'

/**
 * main.ts
 * @author Aélion <jean-luc.aubert@aelion.fr>
 * @version 1.0.0
 * 
 * Entry point of our frontend application
 */
class Main {
    constructor() {
        let myName: string
        myName = 'Juan-Luc'

        /**
        * Récupère dans le DOM (Document Object Model) le premier Objet (élément HTML)
        * qui dispose d'un attribut "app"
        */
        const app: Element = document.querySelector('[app]')
        app.innerHTML = myName

        // New instance of ListHTML
        const listHTML = new ListHTML()
        app.appendChild(listHTML.build())

        // const tableHtml = new TableHtml()
        // app.appendChild(tableHtml.buildTable()) 

        this.studentList().then(
            (datas: any) => {
                const names: Array<string> = datas
                .map((data: any) => data.lastName)
                
                const tableEl: HTMLTable = new HTMLTable()
                tableEl.setTableContent(names)
                app.appendChild(tableEl.build())

            })

        
    }
    
    private async studentList(): Promise<any> {
        const endPoint: string = 'http://127.0.0.1:5000/api/v1/students'
        const response = await fetch(
            endPoint
        )
        return await response.json()
    }


}

/**
 * Launch app
 */
const main = new Main()


