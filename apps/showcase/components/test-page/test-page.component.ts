import { Component, ViewChild } from '@angular/core';
import { ScrollTop, ScrollTopModule } from 'primeng/scrolltop';
import { TooltipModule } from 'primeng/tooltip';
@Component({
    selector: 'app-test-page',
    imports: [ScrollTopModule, TooltipModule],
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
    @ViewChild('appendScrollTop') scrollTop: ScrollTop;

    getAppendTo() {
        return this.scrollTop?.el?.nativeElement ?? null;
    }
}
