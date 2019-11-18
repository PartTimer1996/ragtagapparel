// import {
//   CommonModule} from '@angular/common';
import {
  NgModule
} from '@angular/core';
import {
  MatSidenavModule
} from '@angular/material/sidenav';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  MatListModule
} from '@angular/material/list';
import {
  // ... other modules ...
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatPaginatorModule
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      // CommonModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatTabsModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressBarModule,
      MatPaginatorModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatMenuModule

  ],
  exports: [
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatTabsModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressBarModule,
      MatPaginatorModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatMenuModule
  ]
})
export class MaterialModule {}
