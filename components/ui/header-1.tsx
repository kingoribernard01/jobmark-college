
'use client';
import React from 'react';
import { Button, buttonVariants } from './button';
import { cn } from '../../lib/utils';
import { MenuToggleIcon } from './menu-toggle-icon';
import { useScroll } from './use-scroll';
import { createPortal } from 'react-dom';
import { Building2 } from 'lucide-react';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'About',
			href: '#about',
		},
		{
			label: 'Programs',
			href: '#programs',
		},
		{
			label: 'Why Jobmark',
			href: '#why-us',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
				'bg-white/80 supports-[backdrop-filter]:bg-white/50 border-slate-200 backdrop-blur-lg py-1':
					scrolled,
                'bg-white py-2': !scrolled
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
				<div className="hover:bg-slate-50 rounded-md p-2 transition-colors cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
					<div className="flex items-center gap-2">
                        <div className="bg-blue-900 p-2 rounded-lg shadow-lg">
                            <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-blue-900 uppercase font-display hidden sm:block">JOBMARK<span className="text-slate-500 font-light lowercase"> College</span></span>
                    </div>
				</div>
				<div className="hidden items-center gap-4 md:flex">
					{links.map((link) => (
						<a key={link.label} className={cn(buttonVariants({ variant: 'ghost' }), "uppercase tracking-widest text-[10px] font-black")} href={link.href}>
							{link.label}
						</a>
					))}
					<Button variant="outline" className="uppercase tracking-widest text-[10px] font-black" onClick={() => window.location.href='#contact'}>Contact</Button>
					<Button className="uppercase tracking-widest text-[10px] font-black px-6" onClick={() => window.location.href='#enroll'}>Enroll Now</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-none shadow-none hover:bg-transparent"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-6 text-blue-900" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-6">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={cn(buttonVariants({
								variant: 'ghost',
								className: 'justify-start py-6 text-lg font-black uppercase tracking-widest',
							}))}
							href={link.href}
                            onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<Button variant="outline" className="w-full bg-transparent py-8 text-sm font-black uppercase tracking-widest" onClick={() => { setOpen(false); window.location.href='#contact'; }}>
						Contact Support
					</Button>
					<Button className="w-full py-8 text-sm font-black uppercase tracking-widest" onClick={() => { setOpen(false); window.location.href='#enroll'; }}>
						Apply Now
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-white fixed top-[4.5rem] right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:slide-in-from-top-4 ease-out duration-300',
					'size-full p-6',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}
