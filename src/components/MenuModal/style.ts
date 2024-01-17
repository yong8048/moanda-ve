import styled, { css } from "styled-components";

interface IMenuModalContainerProps {
  $isOpen: boolean;
}

export const MenuModalSection = styled.section<IMenuModalContainerProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease-out;
`;
export const MenuModalContainer = styled.div<IMenuModalContainerProps>`
  @media ${({ theme }) => theme.windowSize.small} {
    min-width: 320px;
    min-height: 500px;
    max-height: 85%;
  }

  min-width: 450px;
  min-height: 750px;
  max-height: 85%;
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 5px;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary_light};
  transition: all 0.3s ease-out;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "100%")});

  h3 {
    @media ${({ theme }) => theme.windowSize.small} {
      font-size: 12px;
    }
    width: 100%;
    text-align: center;
    line-height: 20px;
  }
`;

export const MenuModalImage = styled.img`
  width: 300px;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 20px;
  @media ${({ theme }) => theme.windowSize.small} {
    width: 150px;
    height: 200px;
  }
`;

export const MenuModalHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: 10px 0;
`;

export const MenuModalExit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 20px;
  padding: 0;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

export const MenuModalImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuModalTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  position: relative;
`;

export const MenuModalTitleDesign = styled.span`
  width: 100%;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #bedd9c;
  border-radius: 100px;
  rotate: -10deg;
  translate: 4px;
  z-index: 1;
`;

export const MenuModalTitleName = styled.span`
  z-index: 100;
  position: relative;

  h2 {
    position: absolute;
    font-size: 12px;
    color: gray;
    bottom: -15px;
    right: 0;
  }
`;

export const MenuModalDesTitle = styled.div`
  width: 130px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const MenuModalDes = styled.h3``;

export const MenuModalWarning = styled.h3`
  @media ${({ theme }) => theme.windowSize.small} {
    margin: 5px 0 0 0;
  }
  margin: 30px 0px;
  color: #ff6666;
`;

export const MenuModalIngredient = styled.h3`
  color: gray;
`;

export const MenuModalNaver = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  margin: 15px 0;
  padding: 6px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  h1 {
    margin-top: 5px;
    margin-left: 10px;
    font-size: small;
  }
`;

export const AreaElement = styled.span<{
  rotate: number;
  translate: number;
}>`
  width: 100%;
  height: 2px;
  background-color: black;
  ${props => css`
    rotate: ${props.rotate}deg;

    transform: translateY(${props.translate}px) translateX(-25%);
    background-color: black;
  `}
`;