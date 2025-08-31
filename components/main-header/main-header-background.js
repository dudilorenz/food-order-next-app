import MainHeader from '@/components/main-header/main-header'

import styles from './main-header.module.css';

export default function MainHeaderBackground({children}) {
  return (
    <div>
        <div className={styles['header-background']}></div>
        <MainHeader/>
        {children}
    </div>
  )
}
