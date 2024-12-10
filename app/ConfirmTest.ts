import { el, View } from "@common-module/app";
import { ConfirmDialog } from "@common-module/app-components";

export default class ConfirmTest extends View {
  constructor() {
    super();
    this.container = el(".confirm-test");

    new ConfirmDialog({
      title: "Test",
      message: "This is a test",
      onConfirm: () => {
        console.log("Confirmed");
      },
    });
  }
}
