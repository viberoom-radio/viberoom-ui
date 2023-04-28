import React from 'react';
import { Howler } from 'howler';
import { Button } from 'shared/ui/button';
import { VOLUME_HIGH, VOLUME_LOW, VOLUME_NONE } from './constants';
import { getIconName } from './utils';
import * as Styled from './styles';

export const VolumeControl = () => {
  const [isShown, setIsShown] = React.useState(false);
  const [volumeLevel, setVolumeLevel] = React.useState(Howler.volume());
  const [volumeIcon, setVolumeIcon] = React.useState('volume-high');
  const backdropRef = React.useRef();
  const controlRef = React.useRef();
  const dropdownRef = React.useRef();

  React.useEffect(() => {
    Howler.volume(volumeLevel);
  }, [volumeLevel]);

  const onClick = () => {
    const newVolumeLevel =
      volumeLevel === VOLUME_NONE ? VOLUME_LOW : VOLUME_NONE;

    setVolumeLevel(newVolumeLevel);
    setVolumeIcon(getIconName(newVolumeLevel));
  };

  const onChange = ({ target }) => {
    const newVolumeLevel = Number(target.value);

    setVolumeLevel(newVolumeLevel);
    setVolumeIcon(getIconName(newVolumeLevel));
  };

  const onMouseEnter = () => {
    setIsShown(true);
  };

  const onMouseLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const validElements = [
      backdropRef.current,
      controlRef.current,
      dropdownRef.current,
    ];
    const targetElement = event.relatedTarget;

    if (!validElements.includes(targetElement)) {
      setIsShown(false);
    }
  };

  return (
    <Styled.VolumeControl>
      <Styled.VolumeControlButton>
        <Button
          icon={volumeIcon}
          color="transparent"
          ariaLabel="Adjust volume"
          onClick={onClick}
          onFocus={onMouseEnter}
          onBlur={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </Styled.VolumeControlButton>

      {isShown && (
        <Styled.VolumeControlDropdown
          ref={dropdownRef}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        >
          <Styled.VolumeControlBackdrop ref={backdropRef}>
            <Styled.VolumeControlRange
              type="range"
              ref={controlRef}
              min={VOLUME_NONE}
              max={VOLUME_HIGH}
              step={0.01}
              value={volumeLevel}
              onChange={onChange}
            />
          </Styled.VolumeControlBackdrop>
        </Styled.VolumeControlDropdown>
      )}
    </Styled.VolumeControl>
  );
};
