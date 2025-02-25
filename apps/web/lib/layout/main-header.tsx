import { IClassName } from '@app/interfaces';
import { clsxm } from '@app/utils';
import { Container } from 'lib/components';
import { PropsWithChildren } from 'react';

export function MainHeader({ children, className, fullWidth }: PropsWithChildren<IClassName>) {
	return (
		<>
			<div className={clsxm('bg-white dark:bg-dark--theme pt-20 -mt-8 pb-4', className)}>
				<Container fullWidth={fullWidth}>{children}</Container>
			</div>
			{/* <Divider /> */}
		</>
	);
}
