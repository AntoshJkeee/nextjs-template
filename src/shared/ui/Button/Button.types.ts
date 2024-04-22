import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	// type: 'submit' | 'reset' | 'button' | undefined;
	data: {
		text: string;
	};
	cn: {
		margin?: string | undefined;
	};
}

export default IButton;
