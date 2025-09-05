import Link from 'next/link';
import MealsGrid from '@/components/meals/meal-grid';
import styles from './page.module.css';


export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
        <p className={`cta @{styles.cta}`}>
          <Link href="/meals/share">Share you favorite recipe</Link>
        </p>
      </header>className
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}



