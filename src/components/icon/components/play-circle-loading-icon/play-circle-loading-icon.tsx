import { SvgProps } from '../../types';

export const PlayCircleLoadingIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 379 379"
    fill="#fff"
    stroke={color}
  >
    <path
      d="M323.5,55.5c-74-74-194-74-268,0s-74,194,0,268s194,74,268,0S397.5,129.5,323.5,55.5z M266.3,228.7c4-8,6.8-16.8,8.4-25.6
			c0.8-5.6,6-9.2,11.6-8.4c5.6,0.8,9.2,6,8.4,11.6c-1.6,11.2-5.2,22-10.4,31.6c-5.2,10-11.6,19.2-19.6,27.2s-17.2,14.4-27.2,19.6
			s-20.4,8.4-31.6,10.4c-5.6,0.8-10.8-2.8-11.6-8.4c-0.8-5.6,2.8-10.8,8.4-11.6c8.8-1.6,17.6-4.4,25.6-8.4s15.2-9.6,22-16
			C256.7,243.9,262.3,236.7,266.3,228.7z M57.5,189.5c0,5.6-4.4,10-10,10s-10-4.4-10-10c0-20,4-40,11.6-58.4
			c7.6-18.4,18.8-35.2,32.8-49.6c14.4-14.4,31.2-25.2,49.6-32.8c18-7.6,38-11.6,58-11.6c5.6,0,10,4.4,10,10c0,5.6-4.4,10-10,10
			c-17.6,0-34.8,3.6-50.4,10c-16,6.4-30.4,16.4-42.8,28.8c-12.4,12.4-22,26.8-28.8,42.8C61.1,154.7,57.5,171.9,57.5,189.5z
			 M112.7,150.3c-4,8-6.8,16.8-8.4,25.6c-0.8,5.6-6,9.2-11.6,8.4c-5.6-0.8-9.2-6-8.4-11.6c1.6-11.2,5.2-22,10.4-31.6
			c5.2-10,11.6-19.2,19.6-27.2s17.2-14.4,27.2-19.6s20.4-8.4,31.6-10.4c5.6-0.8,10.8,2.8,11.6,8.4s-2.8,10.8-8.4,11.6
			c-8.8,1.6-17.6,4.4-25.6,8.4s-15.2,9.6-22,16C122.3,135.1,116.7,142.3,112.7,150.3z M152.7,152.7c20.4-20.4,53.2-20.4,73.2,0
			c20.4,20.4,20.4,53.2,0,73.2c-20.4,20.4-53.2,20.4-73.2,0C132.7,205.9,132.7,173.1,152.7,152.7z M296.7,297.5
			c-14.4,14.4-31.2,25.2-49.6,33.2c-18.4,7.6-38,11.6-58.4,11.6c-5.6,0-10-4.4-10-10c0-5.6,5.2-10.8,10.8-10.8
			c17.6,0,34.8-3.6,50.4-10c16-6.4,30.4-16.4,42.8-28.8c12.4-12.4,22-26.8,28.8-42.8c6.4-16,10-33.2,10-50.4c0-5.6,4.8-10,10-10
			c5.6,0,10,4.4,10,10c0,20.4-4,40-11.6,58.4C322.3,266.3,311.1,283.1,296.7,297.5z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 190 190"
        to="360 190 190"
        dur="1s"
        additive="sum"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.6;0.8;0.6"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);