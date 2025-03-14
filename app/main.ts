import { Router } from "@common-module/app";
import ConfirmView from "./views/ConfirmView.js";
import ImageViewerView from "./views/ImageViewerView.js";
import IndexView from "./views/IndexView.js";
import TabView from "./views/TabView.js";

Router
  .add("/", IndexView)
  .add("/confirm", ConfirmView)
  .add("/tabs", TabView)
  .add("/image-viewer", ImageViewerView);
