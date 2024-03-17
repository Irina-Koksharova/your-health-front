import { useEffect, useState } from 'react';
import i18next from 'i18next';
import languages from '../data/languages.json' assert { type: 'json' };
import i18n from '../i18n';

export const useLanguage = () => {
  const [langs, setLangs] = useState<{ symbol: string; lang: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<null | string>(null);

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
    } else {
      console.log('Iea1!!!')
    }
  };

  return {
    langs,
    isSelected,
    onClick,
    onSelect,
    onKeyDown
  };
};
