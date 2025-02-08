'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import Logo from './logo';
import { menuItems } from '../config/nav-config';
import { usePathname } from 'next/navigation';
import Iconify from './iconify';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems?.map((item) => {
          if (item.children && item.children.length)
            return (
              <Dropdown key={item.key}>
                <NavbarItem isActive={pathname === item.href}>
                  <DropdownTrigger>
                    <Button
                      className="bg-transparent p-0"
                      disableRipple
                      disableAnimation
                      endContent={<Iconify iconName="heroicons:chevron-down" />}
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label={item.key} items={item.children}>
                  {(child) => (
                    <DropdownItem key={child.key} href={child.href}>
                      {child.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            );

          return (
            <NavbarItem key={item.href} isActive={pathname === item.href}>
              <Button as={Link} className="bg-transparent p-0" href={item.href}>
                {item.label}
              </Button>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.key}>
            <Link className="w-full" href={item.href}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
