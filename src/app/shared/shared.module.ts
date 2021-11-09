import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule {

}