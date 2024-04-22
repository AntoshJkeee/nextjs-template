import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	type: 'submit' | 'reset' | 'button' | undefined;
	text: string;
}
