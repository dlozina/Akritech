import Link from 'next/link';

import { Background } from '../background/Background';
import { MainHeader } from '../header/MainHeader';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/dlozina">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-28">
      <MainHeader
        title={
          <>
            <span className="text-primary-500">Akritech</span>
          </>
        }
        description="A software development and consulting firm. We strive to build beautiful digital experiences."
      />
    </Section>
  </Background>
);

export { Header };
