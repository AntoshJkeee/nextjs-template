import './Header.scss';
import Link from 'next/link';
import { ROUTER_PATHS } from '../../shared/constants/routes';
import styles from './Header.module.scss';
import { SiNextdotjs } from 'react-icons/si';
import { Button } from '../../shared/ui';

export function Header() {
	return (
		<footer className={styles.header}>
			<nav className={styles.navigation}>
				<Button className="header__button-log" data={{ text: 'Войти' }} cn={{ margin: 'mt-12' }} />
				<Link className={styles.link} href={ROUTER_PATHS.ROOT}>
					<SiNextdotjs />
				</Link>
				<Link className={styles.link} href={ROUTER_PATHS.ABOUT}>
					О нас
				</Link>
				<Link className={styles.link} href={ROUTER_PATHS.COURSES}>
					Курсы
				</Link>
			</nav>
		</footer>
	);
}
