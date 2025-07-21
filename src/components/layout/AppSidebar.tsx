'use client';

import Link from 'next/link';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  User,
  GraduationCap,
  Briefcase,
  Wrench,
  Lightbulb,
  Award,
  Mail,
} from 'lucide-react';
import { useActiveSection } from '@/hooks/use-active-section';
import { useMemo } from 'react';

const navLinks = [
  { href: '#about', id: 'about', label: 'About Me', icon: User },
  { href: '#education', id: 'education', label: 'Education', icon: GraduationCap },
  { href: '#experience', id: 'experience', label: 'Work Experience', icon: Briefcase },
  { href: '#skills', id: 'skills', label: 'Skills', icon: Wrench },
  { href: '#projects', id: 'projects', label: 'Projects', icon: Lightbulb },
  { href: '#certifications', id: 'certifications', label: 'Certifications', icon: Award },
  { href: '#contact', id: 'contact', label: 'Contact', icon: Mail },
];

const AppSidebar = () => {
  const { setOpenMobile } = useSidebar();
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeSection = useActiveSection(sectionIds, {
    rootMargin: '-50% 0px -50% 0px',
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpenMobile(false);
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group-data-[collapsible=icon]:hidden font-headline text-lg font-bold tracking-tight text-primary"
            onClick={() => setOpenMobile(false)}
          >
            SALMAN SALEEM
          </Link>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                className="w-full justify-start"
                tooltip={{ children: link.label }}
                isActive={activeSection === link.id}
              >
                <Link href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
};

export default AppSidebar;
