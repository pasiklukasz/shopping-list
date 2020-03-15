import {AfterViewInit, Component, Input, QueryList, ViewChildren} from '@angular/core';
import {CATEGORIES, Item, ItemSelectionEvent, STATIC_DATA_ITEMS} from "../external-config/data.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {TransitionGroupItemDirective} from "../transition-group";

@Component({
    selector: 'sl-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements AfterViewInit {

    @Input()
    category: CATEGORIES;

    @ViewChildren(TransitionGroupItemDirective) items: QueryList<TransitionGroupItemDirective>;

    data: Item[] = STATIC_DATA_ITEMS;

    shouldMove: boolean = true;

    constructor() {
    }

    ngAfterViewInit() {
        setTimeout(() => this.refreshPosition('prevPos'), 0); // save init positions on next 'tick'
        this.items.changes.subscribe((items: any) => {
            items.forEach((item: any) => item.prevPos = item.newPos || item.prevPos);
            items.forEach(this.runCallback);
            this.refreshPosition('newPos');
            items.forEach((item: any) => item.prevPos = item.prevPos || item.newPos); // for new items

            if (this.shouldMove) {
                const animate = () => {
                    items.forEach(this.applyTranslation);
                    document.body.offsetHeight; // force reflow to put everything in position
                    this.items.forEach(this.runTransition.bind(this));
                };

                const willMoveSome = items.some((item: any) => {
                    const dx = item.prevPos.left - item.newPos.left;
                    const dy = item.prevPos.top - item.newPos.top;
                    return dx || dy;
                });
                if (willMoveSome) {
                    animate();
                } else {
                    setTimeout(() => { // for removed items
                        this.refreshPosition('newPos');
                        animate();
                    }, 0);
                }
            }
        })
    }


    runCallback(item: TransitionGroupItemDirective) {
        if (item.moveCallback) {
            item.moveCallback();
        }
    }

    runTransition(item: TransitionGroupItemDirective) {
        if (!item.moved) {
            return;
        }
        const cssClass = 'flip-list-move';
        let el = item.el;
        let style: any = el.style;
        el.classList.add(cssClass);
        style.transform = style.WebkitTransform = style.transitionDuration = '';
        el.addEventListener('transitionend', item.moveCallback = (e: any) => {
            if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener('transitionend', item.moveCallback);
                item.moveCallback = null;
                el.classList.remove(cssClass);
            }
        });
    }

    refreshPosition(prop: string) {
        this.items.forEach((item: any) => {
            item[prop] = item.el.getBoundingClientRect();
        });
    }

    applyTranslation(item: TransitionGroupItemDirective) {
        item.moved = false;
        const dx = item.prevPos.left - item.newPos.left;
        const dy = item.prevPos.top - item.newPos.top;
        if (dx || dy) {
            item.moved = true;
            let style: any = item.el.style;
            style.transform = style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)';
            style.transitionDuration = '0s';
        }
    }

    addItem() {
        console.log('Add item called');
    }

    handleSelectionChange(event: ItemSelectionEvent, currentIndex: number) {
        if (event.selected) {
            this.moveItemToTheBottom(currentIndex);
        } else {
            this.moveItemToTheTop(currentIndex);
        }
    }


    private moveItemToTheBottom(currentIndex: number) {
        const length = this.data == null ? 0 : this.data.length;
        const elements = this.data.slice(currentIndex + 1, length);
        let result: Item[] = [];
        this.copyArray(this.data, result);
        let changedItem: Item = this.data[currentIndex];
        for (let i = currentIndex; i < length; i++) {
            result[i] = elements[i - currentIndex];
        }
        result[length - 1] = changedItem;
        this.data = result;
    }

    private moveItemToTheTop(currentIndex: number) {
        const elements = this.data.slice(0, currentIndex);
        let result: Item[] = [];
        this.copyArray(this.data, result);
        let changedItem: Item = this.data[currentIndex];
        for (let i = currentIndex; i > 0; i--) {
            result[i] = elements[i-1];
        }
        result[0]=changedItem;
        this.data=result;
    }

    drop(event: CdkDragDrop<Item[]>) {
        this.shouldMove = false;
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        setTimeout(() => this.shouldMove = true, 0);
    }

    copyArray(source: Item[], array: Item[]) {
        let index = -1;
        const length = source.length;

        array || (array = new Array(length));
        while (++index < length) {
            array[index] = source[index]
        }
        return array
    }



}
