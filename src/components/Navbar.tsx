import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { LinkProps, HStack, useColorMode, Spacer } from '@chakra-ui/react';
import NextChakraLink from './NextChakraLink';
import Logo from './Logo';

const LINKS: Record<string, string> = {
  INDEX: `/`,
  'LOREM IPSUM': `/lorem-ipsum`,
};

type NavProps = {
  href: string;
  children?: string | ReactNode;
  props?: LinkProps;
};

const NavLink = ({ href, children, ...props }: NavProps) => {
  const colorMode = useColorMode();
  const router = useRouter();
  const isActive = router.asPath === href;
  const activeLinkColor =
    colorMode.colorMode === `light` ? `blackAlpha.900` : `whiteAlpha.900`;
  const inactiveLinkColor =
    colorMode.colorMode === `light` ? `blackAlpha.500` : `whiteAlpha.500`;
  const linkColor = isActive ? activeLinkColor : inactiveLinkColor;
  const linkFontWeight = isActive ? `bold` : `light`;
  return (
    <NextChakraLink
      fontWeight={linkFontWeight}
      color={linkColor}
      textDecoration="none"
      textShadow="dark-lg"
      borderBottom="0.1rem solid"
      href={href}
      p="1rem 3rem"
      {...props}
      _hover={{ textDecor: `none`, color: activeLinkColor }}
    >
      {children}
    </NextChakraLink>
  );
};

const Navbar = () => {
  const navLinks: ReactNode[] = [];
  Object.keys(LINKS).forEach((k) => {
    navLinks.push(
      <NavLink key={k} href={LINKS[k]}>
        {k}
      </NavLink>,
    );
  });
  return (
    <HStack spacing={0} p="2rem 4rem">
      <Logo />
      <Spacer />
      {navLinks}
    </HStack>
  );
};

export default Navbar;
