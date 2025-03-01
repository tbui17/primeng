import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TooltipModule } from './tooltip';

@Component({
    selector: 'tooltip-component-fixture',
    template: `<input data-testId="input1" type="text" pTooltip="Test333" />`,
    standalone: true,
    imports: [TooltipModule]
})
class TooltipComponentFixture {}

describe('Tooltip', () => {
    let component: TooltipComponentFixture;
    let fixture: ComponentFixture<TooltipComponentFixture>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TooltipComponentFixture]
        }).compileComponents();

        fixture = TestBed.createComponent(TooltipComponentFixture);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render on enter', async () => {
        const targetEl: HTMLElement = fixture.debugElement.query(By.css('[data-testId="input1"]')).nativeElement;
        targetEl.dispatchEvent(new Event('mouseenter'));
        const tooltipEl = targetEl.ownerDocument.querySelector('.p-tooltip');
        expect(tooltipEl).toBeTruthy();
    });

    it('should be removed from dom on leave', async () => {
        const targetEl: HTMLElement = fixture.debugElement.query(By.css('[data-testId="input1"]')).nativeElement;
        targetEl.dispatchEvent(new Event('mouseenter'));
        targetEl.dispatchEvent(new Event('mouseleave'));
        const tooltipEl = targetEl.ownerDocument.querySelector('.p-tooltip');
        expect(tooltipEl).toBeNull();
    });
});
