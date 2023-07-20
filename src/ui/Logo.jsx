import { styled } from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useSidebar } from '../context/SidebarContext';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4.5rem;
  width: auto;

  @media (min-width: 768px) {
    height: 6rem;
  }
`;

function Logo({ logoOnly = true }) {
  const { close } = useSidebar();
  if (logoOnly)
    return (
      <StyledLogo>
        <Img src="/logos/logo_landscape.png" alt="Logo" />
      </StyledLogo>
    );

  if (!logoOnly)
    return (
      <div className="flex flex-col gap-1">
        <ButtonIcon className="self-end" onClick={close}>
          <HiOutlineXMark />
        </ButtonIcon>
        <StyledLogo>
          <Img src="/logos/logo_landscape.png" alt="Logo" />
        </StyledLogo>
      </div>
    );
}

export default Logo;
