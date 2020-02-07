import { Component, OnInit, Inject } from "@angular/core";
import { AccountItem } from "src/shared/models/account-item.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
import { AddAccountFormComponent } from "../add-account-form/add-account-form.component";
@Component({
  selector: "app-accounts-page",
  templateUrl: "./accounts-page.component.html",
  styleUrls: ["./accounts-page.component.scss"]
})
export class AccountsPageComponent implements OnInit {
  constructor() {}

  onButtonClick() {
    // show the edit modal
    /*const dialogRef = this.dialog.open(AddAccountFormComponent, {
      width: "580px",
      data: "item"
    });
    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
      }
    });*/
  }

  ngOnInit() {}
}
