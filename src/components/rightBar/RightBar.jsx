import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateNotificationSideBarData } from "../../redux/Actions";
import Spinner from "../spinnerLoader/Spinner";
import { mockGetCall } from "../../networkCall/MockNetCall";
import { NotificationSideBarData } from "../../utils/SampleData";
import NotificationBar from "../notificationBar/NotificationBar";
import "./RightBar.css";

const RightBar = (props) => {
  const [inProgress, setInProgresss] = useState(false);

  const { data, updateData } = props;

  useEffect(() => {
    //resolve promise here and update the data
    setInProgresss(true);
    mockGetCall(NotificationSideBarData)
      .then((data) => {
        updateData(data.data);
        setInProgresss(false);
      })
      .catch(() => {
        setInProgresss(false);
        // handle error here
      });
  }, []);

  return (
    <div className="right-bar-container">
      {inProgress ? (
        <Spinner />
      ) : (
        <div>
            <div className="right-bar-heading">Notification</div>
          <NotificationBar data={data.Notifacations ?? []} />
          <div className="right-bar-heading">Activities</div>
          <NotificationBar data={data.Activities ?? []} isProcess={true} />
          <div className="right-bar-heading">Contacts</div>
          <NotificationBar data={data.Contacts ?? []} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.NotiSidebar.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(updateNotificationSideBarData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);
