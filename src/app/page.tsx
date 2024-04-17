import styles from './page.module.scss';

export default function Home() {
	return (
		<>
			<main>
				<h1 style={{ textAlign: 'center' }}>Шаблон Next JS 14</h1>
				<ul className={styles.ul}>
					<li className={styles.li}>NEXT JS 14.1.4</li>
					<li className={styles.li}>REACT JS 18.2.0</li>
					<li className={styles.li}>NEXT JS 14.1.4</li>
					<li className={styles.li}>TYPESCRIPT 5.4.3</li>
					<li className={styles.li}>PRECOMMIT, LINT-STAGED, COMMIT-LINT, COMMIZEN, GIT-HOOKS</li>
					<li className={styles.li}>REACT ICONS (maybe remove package)</li>
					<li className={styles.li}>STYLELINT, PRETTIER, ESLINT</li>
					<li className={styles.li}>REACT ICONS (maybe remove package)</li>
					<li className={styles.li}>SASS, SWISS-KNIFE, POSTCSS</li>
				</ul>
			</main>
		</>
	);
}
