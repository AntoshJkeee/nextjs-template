import './Button.scss';
import IButton from './Button.types';
import { classes } from './Button.cn';
import { useClassName } from '../../hooks';

export const Button = (props: IButton) => {
	// # ЛОГИКА КОМПОНЕНТА # //
	const { type = 'button', data, cn, onClick, className = '' } = props;

	// # ПОЛУЧЕНИЕ CSS КЛАССОВ КОМПОНЕНТА # //
	const styles = classes({ ...cn });

	// # ВЕРСТКА КОМПОНЕНТА # //
	return (
		<button className={useClassName(styles.button, className)} type={type} onClick={onClick}>
			{data.text}
		</button>
	);
};
