import React from "react";
import "./TopNavBar.css";

// PUBLIC_INTERFACE
function TopNavBar() {
  /**
   * This is the top navigation bar for the StreakFlow app.
   * Left: App icon and name ("📈 StreakFlow")
   * Right: Profile icon (👤 placeholder)
   * Styles: Soft background, subtle shadow, responsive padding, divider line beneath.
   */
  return (
    <nav className="top-navbar">
      <div className="top-navbar__content">
        <div className="top-navbar__left">
          <span className="top-navbar__icon" aria-label="chart icon" role="img">
            📈
          </span>
          <span className="top-navbar__appname">StreakFlow</span>
        </div>
        <div className="top-navbar__right">
          <span className="top-navbar__profile" aria-label="profile icon" role="img">
            👤
          </span>
        </div>
      </div>
      <div className="top-navbar__divider"></div>
    </nav>
  );
}

export default TopNavBar;
