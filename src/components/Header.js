import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header({ menu, filterItems, categories }) {
  let [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="HeaderWrap">
      <Container>
        <Row>
          <Col className="menuWrap">
            <div className="menuWrapInner">
              <h1 style={{ marginBottom: "1rem" }}>Menu</h1>
              <FaBars
                className="barMenu"
                onClick={() => {
                  setButtonClick(!buttonClick);
                }}
              />
            </div>

            {/* 햄버거메뉴 */}

            {buttonClick
              ? categories.map((item, index) => {
                  return (
                    <div
                      onClick={() => filterItems(item)}
                      className="menuList"
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })
              : null}
          </Col>
          {categories.map((item, index) => {
            return (
              <input
                onClick={() => filterItems(item)}
                className="InputButton"
                type="button"
                value={item}
              />
            );
          })}
        </Row>
        <Menu menu={menu} />
      </Container>
    </div>
  );
}
