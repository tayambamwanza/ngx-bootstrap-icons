import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeaturedComponent } from "./featured.component";

@NgModule({
  declarations: [FeaturedComponent],
  imports: [CommonModule],
  exports: [FeaturedComponent],
})
export class FeaturedModule {}
