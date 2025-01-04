import React from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

function ProgressBar() {
  return null; // Le composant n'a pas besoin de retourner quoi que ce soit
}

export const startProgress = () => NProgress.start();
export const stopProgress = () => NProgress.done();

export default ProgressBar;
