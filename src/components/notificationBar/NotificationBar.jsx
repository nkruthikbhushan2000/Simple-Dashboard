import React, { useEffect, useState } from "react";
import { Avatar, Tooltip } from "antd";
import { connect } from "react-redux";
import "./NotificationBar.css";
import { formatDistanceToNow } from "date-fns";

const NotificationBar = ({ data, isProcess = false, isNotiBarOpen }) => {
  const [applyAnimate, setApplyAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setApplyAnimate(true), 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isNotiBarOpen) {
      setApplyAnimate(true);
    } else {
      setApplyAnimate(false);
    }
  }, [isNotiBarOpen]);

  return (
    <div className="notification-bar-container">
      {data.map((item, index) => (
        <div
          key={index}
          className={`notification-bar-item ${
            applyAnimate ? "animate-item" : ""
          }`}
        >
          <div className="notification-bar-avatar">
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
            {isProcess && index != data.length - 1 && (
              <div className="line-box"></div>
            )}
          </div>
          <div className="notification-bar-content">
            <Tooltip title={item.title} trigger={["hover"]}>
              <div className="notification-bar-title">{item.title}</div>
            </Tooltip>
            {item.timeStamp && (
              <div className="notification-bar-desc">
                {formatDistanceToNow(new Date(parseInt(item.timeStamp)), {
                  addSuffix: true,
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isNotiBarOpen: state.NotiSidebar.isOpen,
});
export default connect(mapStateToProps)(NotificationBar);

/**
 * Challenge faced - https://css-tricks.com/flexbox-truncated-text/
 * Activites stepper
 */
