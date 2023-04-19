import React, { useState, useEffect } from "react";
import './style.less'
import { Col, Row } from "antd";
import {UserOutlined,LineOutlined} from '@ant-design/icons';

export default function Header() {

  const headMenu = [
    {
      nameLink: "Lịch chiếu",
      id: "lichChieu",
    },
    {
      nameLink: "Cụm rạp",
      id: "cumrap",
    },
    {
      nameLink: "Tin tức",
      id: "tintuc",
    },
    {
      nameLink: "Ứng dụng",
      id: "ungdung",
    },
  ];

  const renderHeadMenu = () =>{
    return headMenu.map((el,index) =>{
      return <div className="header-menu-link"  key={index} id={el.id}>
        {el.nameLink}
      </div>
    } )
  }
  return (
    <div className="header">
      <Row justify="space-between" className="header-content">
        <Col span={8}>
        <div >
            <img src="/img/headTixLogo.png" alt="logo" style={{ height: 50 }} />
        </div>
        </Col>
        <Col span={8} >
           <div  className="header-menu">
           {renderHeadMenu()}
           </div>
        </Col>
        <Col span={8}>
          <div className="header-login">
          <span className="header-login-link"><UserOutlined /> Đăng Nhập</span>
          <LineOutlined  rotate = "90"/>
          <span className="header-login-link">Đăng ký</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
