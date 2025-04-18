import { el, View } from "@commonmodule/app";
import { ConfirmDialog } from "@commonmodule/app-components";

export default class ConfirmView extends View {
  constructor() {
    super();
    this.container = el(".confirm-view");

    new ConfirmDialog({
      title: "Confirm",
      message: "This is a confirm dialog",
      onConfirm: () => {
        console.log("Confirmed");
      },
    });
  }
}
