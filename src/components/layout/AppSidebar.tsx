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

const navLinks = [
  { href: '#about', label: 'About Me', icon: User },
  { href: '#education', label: 'Education', icon: GraduationCap },
  { href: '#experience', label: 'Work Experience', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#projects', label: 'Projects', icon: Lightbulb },
  { href: '#certifications', label: 'Certifications', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const AppSidebar = () => {
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group-data-[collapsible=icon]:hidden font-headline text-lg font-bold tracking-tight text-primary"
            onClick={handleLinkClick}
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
              >
                <Link href={link.href} onClick={handleLinkClick}>
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
