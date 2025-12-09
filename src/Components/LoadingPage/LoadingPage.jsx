import React, { useState, useEffect } from 'react';
import PixelName from '../PixelName/PixelName';
import styles from './LoadingPage.module.css';


export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  return loading ?
  (
    <div className={styles.loadingPage}>
      <PixelName onFinish={() => setLoading(false)} />
    </div>
  ) : (children);
}
