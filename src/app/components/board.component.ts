import { Component, Input } from '@angular/core';

import { Board } from './board';

@Component({
    selector: 'board',
    template: `
        <div class="main-board"></div>
    `,
    styles: [`
        .main-board{
            width: 100%;
            height: 457px;
            background-color: red;
        }    
    `]
})
export class BoardComponent {
    @Input() board: Board = new Board();
};
