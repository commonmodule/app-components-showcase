import { Router } from "@common-module/app";
import { AppCompConfig } from "@common-module/app-components";
import {
  CloseIcon,
  ExitFullscreenIcon,
  FullscreenIcon,
  NextIcon,
  PrevIcon,
  ResetZoomIcon,
  ShareIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@common-module/svg-icons";
import ConfirmView from "./views/ConfirmView.js";
import ImageViewerView from "./views/ImageViewerView.js";
import IndexView from "./views/IndexView.js";
import TabView from "./views/TabView.js";

AppCompConfig.CloseIcon = CloseIcon;
AppCompConfig.ShareIcon = ShareIcon;

AppCompConfig.PrevIcon = PrevIcon;
AppCompConfig.NextIcon = NextIcon;

AppCompConfig.ZoomInIcon = ZoomInIcon;
AppCompConfig.ZoomOutIcon = ZoomOutIcon;
AppCompConfig.ResetZoomIcon = ResetZoomIcon;

AppCompConfig.FullscreenIcon = FullscreenIcon;
AppCompConfig.ExitFullscreenIcon = ExitFullscreenIcon;

if (location.pathname.includes("/app-components-showcase")) {
  Router.prefix = "/app-components-showcase";
}

Router
  .add("/", IndexView)
  .add("/confirm", ConfirmView)
  .add("/tabs", TabView)
  .add("/image-viewer", ImageViewerView);
