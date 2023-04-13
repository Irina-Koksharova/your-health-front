import { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import i18next from "i18next";
import languages from "../../data/languages.json" assert { type: "json" };
import { colors } from "../../helpers/variables";
import i18n from "../../i18n";
import SvgUse from "../SvgUse";
import {
  WrapperS,
  ContainerS,
  LabelS,
  ButtonS,
  ListS,
  ItemS,
  TextS,
  svgStyle,
} from "./Select.styled";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langs, setLangs] = useState<{ symbol: string; lang: string }[]>([]);
  const [isSelected, setIsSelected] = useState<null | string>(null);
  const { accentBlue } = colors;

  useEffect(() => {
    const isPreferred = i18next.resolvedLanguage;
    if (isPreferred) {
      isPreferred === languages[0].lang
        ? setLangs(languages)
        : setLangs(languages.reverse());
      setIsSelected(isPreferred);
    }
  }, []);

  useEffect(() => {
    const button = document.querySelector(
      'button[data-action="select"]'
    ) as HTMLElement;

    if (button) {
      const container = button.closest("#container") as HTMLElement;
      button.setAttribute("aria-expanded", `${isOpen}`);

      if (isOpen) {
        button.style.transform = "rotate(180deg)";
        container.style.overflow = "visible";
      } else {
        button.style.transform = "rotate(360deg)";
        container.style.overflow = "hidden";
      }
    }
  }, [isOpen]);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (e: { target: any }) => {
    const role = e.target.dataset.role;
    const value = e.target.dataset.value;

    if (role === "option" && value !== isSelected) {
      i18n.changeLanguage(value);
      setLangs(langs.reverse());
      setIsSelected(value);
    }
  };

  const onKeyDown = (e: { target: any; key: any }) => {
    if (e.key === "Enter") {
      if (e.target.style.overflow === "hidden") {
        e.target.style.overflow = "visible";
      }
    }
  };

  return (
    <WrapperS
      id="container"
      aria-labelledby="language"
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <ContainerS>
        <LabelS id="language">language</LabelS>
        <ButtonS
          role="button"
          aria-label="select language"
          aria-controls="listbox"
          aria-expanded="false"
          data-action="select"
          tabIndex={-1}
        >
          <AiOutlineUp color={accentBlue} />
        </ButtonS>
      </ContainerS>
      <ListS
        id="listbox"
        role="listbox"
        aria-label="languages"
        onClick={onSelect}
      >
        {langs.map(({ symbol, lang }) => (
          <ItemS
            key={lang}
            role="option"
            aria-label={lang}
            aria-selected={isSelected === lang ? true : false}
            data-role="option"
            data-value={lang}
            tabIndex={-1}
          >
            <SvgUse
              style={svgStyle}
              icon={`icon-flag-${symbol}`}
              dataRole="option"
              dataValue={lang}
            />
            <TextS data-role="option" data-value={lang}>
              {symbol}
            </TextS>
          </ItemS>
        ))}
      </ListS>
    </WrapperS>
  );
};

export default Select;
