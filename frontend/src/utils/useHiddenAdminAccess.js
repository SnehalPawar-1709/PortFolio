import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// This hook gives the portfolio owner TWO secret ways to reach the admin login,
// without ever showing a visible "Admin Login" link anywhere on the public site:
//
// 1. Keyboard shortcut: Ctrl + Shift + A  (works on desktop)
// 2. Multi-click: clicking the footer copyright text 5 times within 2 seconds
//    (works on mobile/touch devices where there is no keyboard)
//
// Attach the click trigger's ref/handler to any element you choose (e.g. footer text).
export const useHiddenAdminAccess = () => {
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + Shift + A
      if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'A') {
        e.preventDefault();
        navigate('/portal-x9k2-secure-access');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleSecretMultiClick = () => {
    clickCountRef.current += 1;

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      navigate('/portal-x9k2-secure-access');
      return;
    }

    // Reset the click count if the user pauses for more than 2 seconds
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2000);
  };

  return { handleSecretMultiClick };
};
