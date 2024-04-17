interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type: 'submit' | 'reset' | 'button' | undefined;
	text: string;
}

export const Button = ({ text, type, onClick }: IButton) => {
	return (
		<button type={type} onClick={onClick}>
			{text}
		</button>
	);
};
