import { BodyNode, el, View } from "@common-module/app";
import { Tab, Tabs } from "@common-module/app-components";

export default class TabTest extends View {
  constructor() {
    super();
    this.container = el(
      ".tab-test",
      "Tab Test",
      new Tabs(
        new Tab({ label: "Tab 1" }),
        new Tab({ label: "Tab 2" }),
        new Tab({ label: "Tab 3" }),
      ),
    ).appendTo(BodyNode);
  }
}
