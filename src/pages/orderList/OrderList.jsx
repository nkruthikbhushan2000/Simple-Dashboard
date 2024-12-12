import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Input, Avatar, Dropdown, Checkbox } from "antd";
import "./OrderList.css";
import { FaPlus } from "react-icons/fa";
import { CgSortAz } from "react-icons/cg";
import { BiSort } from "react-icons/bi";
import Spinner from "../../components/spinnerLoader/Spinner";
import { connect } from "react-redux";
import { loadOrderList } from "../../redux/Actions";
import { OrderList } from "../../utils/SampleData";
import { mockGetCall } from "../../networkCall/MockNetCall";
import { CiCalendar } from "react-icons/ci";

const OrderTable = (props) => {
  const { data, updateData } = props;

  const [tableData, setTableData] = useState(data);
  const [serachText, setSearchText] = useState("");
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    //resolve promise here and update the data
    setInProgress(true);
    mockGetCall(OrderList)
      .then((data) => {
        console.log(data.data);
        updateData(data.data);
        setInProgress(false);
      })
      .catch(() => {
        setInProgress(false);
        // handle error here
      });
  }, []);

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const columns = [
    {
      title: (
        <>
          <Checkbox />
        </>
      ),
      render: () => <Checkbox />,
    },
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user, record, index) => {
        return (
          <>
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${record.key}`}
            />
            {user}
          </>
        );
      },
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => (
        <div style={{display:"flex", alignItems:"center"}}>
          <CiCalendar size={20} />
          <span>{date}</span>
        </div>
      )
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "geekblue";
        if (status === "In Progress") {
          color = "blue";
        } else if (status === "Complete") {
          color = "green";
        } else if (status === "Pending") {
          color = "orange";
        } else if (status === "Late") {
          color = "red";
        } else if (status === "Rejected") {
          color = "gray";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => <div className="action-column">{getDropDown()}</div>,
    },
  ];

  const items = [
    { key: 1, label: "Edit" },
    { key: 2, label: "Delete" },
  ];

  const getDropDown = () => {
    return (
      <Dropdown menu={{ items }} className="drop-down-button">
        <a onClick={(e) => e.preventDefault()}>
          <Space>...</Space>
        </a>
      </Dropdown>
    );
  };

  const debounseSearch = (val) => {
    setSearchText(val);
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchTable(val);
    }, 300);
  };

  const searchTable = (val) => {
    const newData = data.filter((data) =>
      data.user.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
    setTableData(newData);
  };

  if (inProgress) {
    return <Spinner />;
  }

  return (
    <div className="order-list-container">
      <h3>Order List</h3>
      <div className="order-list-table-actions">
        <div className="table-action-right-item">
          <FaPlus size={20} />
          <CgSortAz size={20} />
          <BiSort size={20} />
        </div>
        <div className="table-action-left-item">
          <Input
            placeholder="Search"
            value={serachText}
            variant="filled"
            onChange={(e) => debounseSearch(e.target.value)}
          />
        </div>
      </div>
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.OrderList.data,
  inProgress: state.OrderList.inProress,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(loadOrderList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
