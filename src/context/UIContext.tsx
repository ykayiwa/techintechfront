import React, { createContext, useContext, useState, useCallback } from "react";

interface UIContextType {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  topBarVisible: boolean;
  hideTopBar: () => void;
  popupVisible: boolean;
  closePopup: () => void;
}

const UIContext = createContext<UIContextType>({
  mobileMenuOpen: false,
  toggleMobileMenu: () => {},
  closeMobileMenu: () => {},
  topBarVisible: true,
  hideTopBar: () => {},
  popupVisible: false,
  closePopup: () => {},
});

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((v) => !v), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const hideTopBar = useCallback(() => setTopBarVisible(false), []);
  const closePopup = useCallback(() => setPopupVisible(false), []);

  React.useEffect(() => {
    const timer = setTimeout(() => setPopupVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <UIContext.Provider value={{ mobileMenuOpen, toggleMobileMenu, closeMobileMenu, topBarVisible, hideTopBar, popupVisible, closePopup }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
