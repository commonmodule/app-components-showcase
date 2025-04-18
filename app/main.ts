import { Router, SPAInitializer } from "@commonmodule/app";
import { AppCompConfig } from "@commonmodule/app-components";
import {
  CloseIcon,
  DownloadIcon,
  ExitFullscreenIcon,
  FullscreenIcon,
  NextIcon,
  PrevIcon,
  ResetZoomIcon,
  ShareIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@commonmodule/svg-icons";
import ConfirmView from "./views/ConfirmView.js";
import ImageViewerView from "./views/ImageViewerView.js";
import IndexView from "./views/IndexView.js";
import TabView from "./views/TabView.js";

SPAInitializer.init();

AppCompConfig.CloseIcon = CloseIcon;
AppCompConfig.ShareIcon = ShareIcon;
AppCompConfig.DownloadIcon = DownloadIcon;

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
