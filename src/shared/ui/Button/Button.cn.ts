import CN from '../../lib/ClassBem';
import IButton from './Button.types';

export function classes(cn: IButton['cn']) {
	const BLOCK = CN('button');
	return {
		button: BLOCK({}, [cn?.margin]),
	};
}
