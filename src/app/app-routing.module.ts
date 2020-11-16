import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturedIconsComponent } from "./featured-icons/featured-icons.component";

const routes: Routes = [{ path: "", component: FeaturedIconsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
