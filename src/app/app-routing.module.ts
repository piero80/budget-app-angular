import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { AccountsPageComponent } from "./accounts-page/accounts-page.component";
import { AddAccountFormComponent } from "./add-account-form/add-account-form.component";
const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "accounts", component: AccountsPageComponent },
  { path: "accounts/add", component: AddAccountFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
