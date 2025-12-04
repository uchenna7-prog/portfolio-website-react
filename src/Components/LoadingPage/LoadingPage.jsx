import React, { useState, useEffect } from 'react';
import PixelName from '../PixelName/PixelName';
import styles from './LoadingPage.module.css';

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingPage}>
        <PixelName />
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return children; 
}
