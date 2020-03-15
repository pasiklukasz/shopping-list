import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoryItemComponent} from './category-item/category-item.component';
import {ContainerComponent} from './container/container.component';
import {ListItemComponent} from './list-item/list-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {A11yModule} from "@angular/cdk/a11y";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {CdkTableModule} from "@angular/cdk/table";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {CdkTreeModule} from "@angular/cdk/tree";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatChipsModule} from "@angular/material/chips";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTreeModule} from "@angular/material/tree";
import {PortalModule} from "@angular/cdk/portal";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {TransitionGroupItemDirective} from "./transition-group";

const MAT_MODULES = [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
];

@NgModule({
    declarations: [
        AppComponent,
        CategoryItemComponent,
        ContainerComponent,
        ListItemComponent,
        TransitionGroupItemDirective
    ],
    imports: [
        MAT_MODULES,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
