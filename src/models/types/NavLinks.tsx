import { lazy, JSX } from "react";
import { href, NavLink } from "react-router-dom";
import NavItemsProps from './NavItemsProps';

const PrimaryButton = lazy(
  () => import('../../components/buttons/PrimaryButton')
);

export default function NavLinks(): JSX.Element {
  const links = [
    {
      name: "Home",
      href: "/",
      isNew: false,
    },
    {
      name: "Login",
      href: "/login",
      isNew: false,
    },
    {
      name: "Register",
      href: "/register",
      isNew: false,
    },
    {
      name: "Tools",
      href: "/tools",
      isNew: false,
    },
  ].map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li className="flex" key={index}>
        <NavLink key={index} to={item.href}>
          {({ isActive }) => (
            <PrimaryButton
              id={item.name}
              active={isActive}
              name={item.name}
              location={item.href}
            >
              {item.name}
            </PrimaryButton>
          )}
        </NavLink>
      </li>
    )
  );

  return <ul className="flex flex-row items-center space-x-4">{links}</ul>;
}
