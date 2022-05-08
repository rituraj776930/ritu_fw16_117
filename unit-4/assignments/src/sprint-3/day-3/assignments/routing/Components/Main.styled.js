import styled from "styled-components";

export const NavbarDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background: #fff;
  padding: 20px 60px;
  display: flex;
  border-bottom: 1px solid #111;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 4px;
`;

export const BannerDiv = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 70px;
  letter-spacing: 2px;
  background: #111;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export const FooterDiv = styled.div`
  width: 100%;
  margin-top: 120px;
`;
