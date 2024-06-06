import React from "react";
import "./GlobalTopBanner.css";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

export default function GlobalTopBanner() {
  return (
    <div className="global_top_banner">
      <Logo className="glob_banner_item_left" />
      <MenuButton className="glob_banner_item_right" />
    </div>
  );
}
