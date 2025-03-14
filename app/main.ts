import { Router } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import { CloseIcon, NextIcon, PrevIcon } from "@common-module/svg-icons";
import ConfirmView from "./views/ConfirmView.js";
import ImageViewerView from "./views/ImageViewerView.js";
import IndexView from "./views/IndexView.js";
import TabView from "./views/TabView.js";

AppCompConfig.CloseIcon = CloseIcon;
AppCompConfig.PrevIcon = PrevIcon;
AppCompConfig.NextIcon = NextIcon;

Router
  .add("/", IndexView)
  .add("/confirm", ConfirmView)
  .add("/tabs", TabView)
  .add("/image-viewer", ImageViewerView);
