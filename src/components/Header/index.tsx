import Image from 'next/image'
import styles from './styles.module.sass'
import Link from 'next/link'

export default function Header(){
  return(
    <header className={styles.nav}>
      <Link href="#">
        <Image src="/logo.png" alt="" width={500} height={500}/>
      </Link>
    </header>
  )
}