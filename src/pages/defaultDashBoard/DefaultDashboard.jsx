import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadDashboard } from "../../redux/Actions";
import { mockGetCall } from "../../networkCall/MockNetCall";
import {
  DefaultDashBoardData,
  ColumnsTopProductSelling,
  TopSellingProducts,
} from "../../utils/SampleData";
import Spinner from "../../components/spinnerLoader/Spinner";
import "./DefaultDashBoard.css";
import BarChart from "../../components/Graphs/BarChart";
import LineChart from "../../components/Graphs/LineChart";
import PieChartComponent from "../../components/Graphs/PieChart";
import DataPods from "../../components/dataPods/DataPods";
import RevenueByLocationChart from "../../components/Graphs/RevenueChart";
import { Table } from "antd";

const DeafultDashboard = (props) => {
  const [inProgress, setInProgresss] = useState(false);
  const [dataForComp, setDataForComp] = useState({});
  const [applyAnimate, setApplyAnimate] = useState(false);

  const { updateData, data } = props;

  useEffect(() => {
    let timer = null;
    //resolve promise here and update the data
    setInProgresss(true);
    mockGetCall(DefaultDashBoardData)
      .then((data) => {
        updateData(data.data);
        setInProgresss(false);
        timer = setTimeout(() => setApplyAnimate(true), 50);
      })
      .catch(() => {
        setInProgresss(false);
        // handle error here
      });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data) {
      setDataForComp(data);
    }
  }, [data]);

  return (
    <div className="dashboard-container">
      {inProgress ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="dashboard-data">
          <h3>eCommerce</h3>
          <section className="dashboard-section">
            <div className="dashboard-pods">
              <DataPods data={dataForComp.DataPod ?? []} />
            </div>
            <div className="dashboard-bar section">
              <h5 className={`${applyAnimate ? "headingAnimate" : ""}`}>
                Projections vs Actuals
              </h5>
              <BarChart data={dataForComp.BarChart ?? []} />
            </div>
          </section>
          <section className="dashboard-section">
            <div className="dashboard-line section">
              <h5 className={`${applyAnimate ? "headingAnimate" : ""}`}>
                Revenue | Previous Week | Current Week
              </h5>
              <LineChart data={dataForComp.LineChart ?? []} />
            </div>
            <div className="dashboard-country section">
              <h5 className={`${applyAnimate ? "headingAnimate" : ""}`}>
                Revenue by location
              </h5>
              <RevenueByLocationChart data={dataForComp.RevenueChart ?? []} />
            </div>
          </section>
          <section className="dashboard-section">
            <div className="dashboard-table section">
              <h5 className={`${applyAnimate ? "headingAnimate" : ""}`}>
                Top Selling Products
              </h5>
              <Table
                columns={ColumnsTopProductSelling}
                dataSource={TopSellingProducts}
                pagination={false}
                className="selling-products-table"
                rowClassName={() => "selling-product-row"}
              />
            </div>
            <div className="dashboard-piechart section">
              <h5 className={`${applyAnimate ? "headingAnimate" : ""}`}>
                Total Sales
              </h5>
              <PieChartComponent data={dataForComp.PieChart ?? []} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

/**
 *
 * antd design setting the onhover row backgroud to null
 */

const mapStateToProps = (state) => ({
  data: state.Dashboard.data,
  inProgress: state.Dashboard.inProress,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(loadDashboard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeafultDashboard);
