import { IButton } from './Button.types';

export const Button = ({ text, type, onClick }: IButton) => {
	return (
		<button type={type} onClick={onClick}>
			{text}
		</button>
	);
};
