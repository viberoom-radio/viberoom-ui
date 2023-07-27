import Link from "next/link";
import { Icon } from "../icon";
import { Props } from "./types";
import * as Styled from "./styles";

export const Button = ({
  children,
  icon,
  href = "#",
  color = "secondary",
  isDisabled = false,
  isPlain = false,
  isFluid = false,
  isFluidMobile = false,
  onClick,
  onFocus,
  onBlur,
  onMouseOver,
  onMouseEnter,
  onMouseOut,
  onMouseLeave,
  ariaLabel,
}: Props) => {
  const isActionButton = href === "#";
  const isExternal = href && href !== "#" && href[0] !== "/";

  const renderChildren = () => (
    <>
      {icon && <Styled.ButtonIcon>{icon}</Styled.ButtonIcon>}
      {children && <Styled.ButtonText>{children}</Styled.ButtonText>}
    </>
  );

  if (isActionButton) {
    return (
      <Styled.Button
        $color={color}
        isDisabled={isDisabled}
        isPlain={isPlain}
        isFluid={isFluid}
        isFluidMobile={isFluidMobile}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        onMouseLeave={onMouseLeave}
        aria-label={ariaLabel}
      >
        {renderChildren()}
      </Styled.Button>
    );
  }

  if (isExternal) {
    return (
      <Styled.Button
        as="a"
        $color={color}
        isDisabled={isDisabled}
        isPlain={isPlain}
        isFluid={isFluid}
        isFluidMobile={isFluidMobile}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        onMouseLeave={onMouseLeave}
      >
        {renderChildren()}

        <Styled.ButtonIconRight>
          <Icon name="ArrowUpRight" />
        </Styled.ButtonIconRight>
      </Styled.Button>
    );
  }

  return (
    <Link href={href}>
      <Styled.Button
        as="a"
        $color={color}
        isDisabled={isDisabled}
        isPlain={isPlain}
        isFluid={isFluid}
        isFluidMobile={isFluidMobile}
      >
        {renderChildren()}
      </Styled.Button>
    </Link>
  );
};
