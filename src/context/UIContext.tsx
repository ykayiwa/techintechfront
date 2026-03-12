import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

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

const POPUP_STORAGE_KEY = "techintech_popup_closed";
const POPUP_COOLDOWN_HOURS = 24;

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((v) => !v), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const hideTopBar = useCallback(() => setTopBarVisible(false), []);
  
  const closePopup = useCallback(() => {
    setPopupVisible(false);
    // Store timestamp in localStorage
    localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
  }, []);

  useEffect(() => {
    // Check if popup was recently closed
    const checkPopupStatus = () => {
      const lastClosed = localStorage.getItem(POPUP_STORAGE_KEY);
      
      if (lastClosed) {
        const hoursSinceClosed = (Date.now() - parseInt(lastClosed)) / (1000 * 60 * 60);
        
        // If less than cooldown period, don't show
        if (hoursSinceClosed < POPUP_COOLDOWN_HOURS) {
          return;
        }
      }
      
      // Show popup after delay
      const timer = setTimeout(() => setPopupVisible(true), 4000);
      return () => clearTimeout(timer);
    };
    
    checkPopupStatus();
  }, []);

  return (
    <UIContext.Provider value={{ 
      mobileMenuOpen, 
      toggleMobileMenu, 
      closeMobileMenu, 
      topBarVisible, 
      hideTopBar, 
      popupVisible, 
      closePopup 
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
