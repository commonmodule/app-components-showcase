import { BodyNode, el, View } from "@commonmodule/app";
import { AppCompConfig, Tab, TabGroup } from "@commonmodule/app-components";

export default class TabView extends View {
  private tabGroup: TabGroup<string>;

  constructor() {
    super();

    AppCompConfig.updateTabBackgroundOnSelect = (tabBackground, tab) => {
      const leftOffset = tab.htmlElement.offsetLeft;
      const rightInset = tabBackground.calculateRect().width - leftOffset -
        tab.calculateRect().width;
      tabBackground.style({
        clipPath: `inset(0px ${rightInset}px 0px ${leftOffset}px round 9999px)`,
      });
    };

    this.container = el(
      ".tab-view",
      "Tab Showcase",
      this.tabGroup = new TabGroup(
        new Tab({ label: "Tab 1", value: "tab1" }),
        new Tab({ label: "Tab 2", value: "tab2" }),
        new Tab({ label: "Tab 3", value: "tab3" }),
      ),
    ).appendTo(BodyNode);

    this.tabGroup.init();
  }
}
