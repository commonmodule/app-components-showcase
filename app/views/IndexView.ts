import { BodyNode, el, Router, View } from "@common-module/app";
import { Button, ButtonGroup, ButtonType } from "@common-module/app-components";

export default class IndexView extends View {
  constructor() {
    super();
    this.container = el(
      "#index",
      new ButtonGroup(
        new Button({
          type: ButtonType.Outlined,
          title: "Confirm",
          onClick: () => Router.go("/confirm"),
        }),
        new Button({
          type: ButtonType.Outlined,
          title: "Tab",
          onClick: () => Router.go("/tabs"),
        }),
        new Button({
          type: ButtonType.Outlined,
          title: "Image Viewer",
          onClick: () => Router.go("/image-viewer"),
        }),
      ),
    ).appendTo(BodyNode);
  }
}
