import { Icon } from '../icon';
import { Props } from './types';
import * as Styled from './styles';

export const Link = ({ href, children }: Props) => {
  const isWithChildren = Boolean(children);
  const isInternal = href.startsWith('/');

  const renderIcon = () => {
    if (!isInternal) {
      return (
        <Styled.LinkIcon>
          <Icon name="ArrowUpRight" />
        </Styled.LinkIcon>
      );
    }

    return null;
  };

  if (!isWithChildren) {
    return null;
  }

  if (isInternal) {
    return (
      <Styled.Link href={href}  onClick={(event) => event.stopPropagation()}>
        {children}
        {renderIcon()}
      </Styled.Link>
    );
  }

  return (
    <Styled.Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
      {renderIcon()}
    </Styled.Link>
  );
};
