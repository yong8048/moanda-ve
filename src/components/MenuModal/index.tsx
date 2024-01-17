import React, { useEffect, useState } from "react";
import * as S from "./style";
import constant from "@/constants/base.json";
const AreaElements = [
  { rotate: -45, translateY: 2 },
  { rotate: 45, translateY: -2 },
];

type ItemType = {
  src: string;
  name: string;
  sugar: string;
  title: string;
  des: string[];
  warning: string;
  ingredient: string;
};

interface IMenuModalProps {
  openState: boolean; // 'isOpen'을 'openState'로 수정
  onClose: () => void;
  item: ItemType | undefined;
}

const MenuModal: React.FC<IMenuModalProps> = ({ openState, onClose, item }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  return (
    <S.MenuModalSection $isOpen={isOpen}>
      <S.MenuModalContainer $isOpen={isOpen}>
        <S.MenuModalHeader>
          <S.MenuModalTitle>
            <S.MenuModalTitleDesign></S.MenuModalTitleDesign>
            <S.MenuModalTitleName>
              {item?.name}
              <h2>당도_{item?.sugar}</h2>
            </S.MenuModalTitleName>
          </S.MenuModalTitle>

          <S.MenuModalExit onClick={onClose}>
            {AreaElements.map((style, index) => (
              <S.AreaElement
                key={index}
                rotate={style.rotate as number}
                translate={style.translateY as number}
              ></S.AreaElement>
            ))}
          </S.MenuModalExit>
        </S.MenuModalHeader>
        <S.MenuModalImageDiv>
          <S.MenuModalImage src={item?.src} alt={item?.name} />
          <S.MenuModalDesTitle>
            {item?.title.split(" + ").map((ingredient, index, arr) => (
              <span key={index}>
                {ingredient}
                {index !== arr.length - 1 && (
                  <>
                    <br />+<br />
                  </>
                )}
              </span>
            ))}
          </S.MenuModalDesTitle>
        </S.MenuModalImageDiv>
        {item?.des.map((text, index) => <S.MenuModalDes key={index}>{text}</S.MenuModalDes>)}
        <S.MenuModalWarning>*{item?.warning}</S.MenuModalWarning>
        <S.MenuModalIngredient>*주성분: {item?.ingredient}</S.MenuModalIngredient>
        <S.MenuModalNaver onClick={() => window.open(constant.NaverStore)}>
          <img src="/Logo/naver.jpg" alt="" />
          <div>
            <h1>모앤더비</h1>
            <h1>스마트 스토어에서 구매가능합니다.</h1>
          </div>
        </S.MenuModalNaver>
      </S.MenuModalContainer>
    </S.MenuModalSection>
  );
};

export default MenuModal;