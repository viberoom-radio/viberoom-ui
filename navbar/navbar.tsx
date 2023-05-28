import { useRouter } from 'next/router';
import { Icon } from 'shared/ui/icon';
import { NavbarItem } from './components/navbar-item';
import * as Styled from './styles';

export const menuItems = [
  {
    href: '/',
    icon: <Icon name="Radio" size={40} />,
    text: 'Radio',
    isActive: false,
  },
  {
    href: '/playlists',
    icon: <Icon name="Spotify" size={40} />,
    text: 'Playlists',
    isActive: false,
  },
  {
    href: '/submit',
    icon: <Icon name="AtSign" size={40} />,
    text: 'Submit',
    isActive: false,
  },
  {
    href: '/artists',
    icon: <Icon name="Globe" size={40} />,
    text: 'Artists',
    isActive: false,
  },
  {
    href: '/about',
    icon: <Icon name="Info" size={40} />,
    text: 'About',
    isActive: false,
  },
];

export const Navbar = () => {
  const router = useRouter();
  const items = menuItems.map((item) => ({
    ...item,
    isActive: item.href === router.pathname,
  }));

  return (
    <Styled.Navbar>
      <Styled.NavbarList>
        {items.map((item, index) => (
          <NavbarItem {...item} key={index} />
        ))}
      </Styled.NavbarList>
    </Styled.Navbar>
  );
};
