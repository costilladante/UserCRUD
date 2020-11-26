import React from "react";
import { Button, Typography, Row, Col } from "antd";
import {
  WarningOutlined,
  WarningFilled,
  WarningTwoTone,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row justify="space-around" align="middle">
        <Col span={24}>
          <WarningOutlined style={{ fontSize: "200px", color: "#fce181" }} />
          <Typography>
            <Title>Welcome to the Home Page</Title>
            <Paragraph>Content is under construction...</Paragraph>
          </Typography>
          {/* <WarningTwoTone
						style={{ fontSize: "200px", color: "red" }}
						twoToneColor="#fce181"
						/>
					<WarningFilled style={{ fontSize: "200px", color: "#fce181" }} /> */}
          <Button type="primary">Ok</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
