import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatDialogModule,
    MatSelectModule
} from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MdePopoverModule } from "@material-extended/mde";

const modules = [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatToolbarModule,
    MatRadioModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSliderModule,
    DragDropModule,
    MatInputModule,
    MatSlideToggleModule,
    MdePopoverModule,
    MatDividerModule,
    MatDialogModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatSelectModule,
    MatBadgeModule
];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules]
})
export class MaterialModule {}
