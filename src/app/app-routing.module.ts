import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturedComponent } from "./featured/featured.component";

const routes: Routes = [{ path: "", component: FeaturedComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
