import { el, View } from "@common-module/app";
import { ConfirmDialog } from "@common-module/app-components";

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
