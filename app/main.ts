import { Router } from "@common-module/app";
import ConfirmTest from "./ConfirmTest.js";
import IndexView from "./IndexView.js";
import TabTest from "./TabTest.js";

(() => {
  console.log("Start Test");

  Router
    .add("/", IndexView)
    .add("/confirm", ConfirmTest)
    .add("/tabs", TabTest);
})();
