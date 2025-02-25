'use client';
import { userState } from '@app/stores';
import { fullWidthState } from '@app/stores/fullWidth';
import SettingsPersonalSkeleton from '@components/shared/skeleton/SettingsPersonalSkeleton';
import { Breadcrumb, Container } from 'lib/components';
import { ArrowLeftIcon } from 'assets/svg';
import { MainLayout } from 'lib/layout';
import { LeftSideSettingMenu } from 'lib/settings';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const SettingsLayout = ({ children }: { children: JSX.Element }) => {
	const t = useTranslations();
	const [user] = useRecoilState(userState);
	const fullWidth = useRecoilValue(fullWidthState);

	const breadcrumb = [
		{ title: JSON.parse(t('pages.home.BREADCRUMB')), href: '/' },
		{ title: JSON.parse(t('pages.settings.BREADCRUMB')), href: '/settings/personnal' }
	];
	if (!user) {
		return <SettingsPersonalSkeleton />;
	} else {
		return (
			<MainLayout
				className="items-start pb-1 overflow-hidden w-full"
				childrenClassName="h-[calc(100vh-_300px)] overflow-hidden w-full"
			>
				<div>
					<div className="pt-12 w-full pb-4 bg-white dark:bg-dark--theme">
						<Container fullWidth={fullWidth}>
							<div className="flex flex-row items-center justify-start gap-8">
								<Link href="/">
									<ArrowLeftIcon className="w-6 h-6" />
								</Link>

								<Breadcrumb paths={breadcrumb} className="text-sm" />
							</div>
						</Container>
					</div>
					<div className="flex">
						<div className="w-96 ml-8">
							<LeftSideSettingMenu />
						</div>
						<div className="h-[calc(100vh-_186px)] mt-3 p-10 overflow-y-auto  w-full">{children}</div>
					</div>
				</div>
			</MainLayout>
		);
	}
};

export default SettingsLayout;
