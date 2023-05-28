import { SvgProps } from '../../types';

export const MixcloudIcon = ({
  color = 'currentColor',
  size = 24,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
    stroke="none"
  >
    <path d="M32,18.504c0,2.159-0.628,4.249-1.825,6.035C29.969,24.833,29.645,25,29.301,25c-0.805,0-1.335-0.922-0.854-1.619 c0.952-1.442,1.472-3.14,1.472-4.877c0-1.747-0.52-3.435-1.472-4.867c-0.775-1.128,0.952-2.326,1.727-1.158 C31.372,14.245,32,16.335,32,18.504z" />
    <path d="M28.507,18.504c0,1.55-0.442,3.052-1.315,4.347c-0.206,0.294-0.53,0.442-0.873,0.442c-0.844,0-1.335-0.932-0.864-1.619 c0.648-0.942,0.971-2.031,0.971-3.17c0-1.138-0.324-2.237-0.971-3.179c-0.775-1.129,0.942-2.316,1.737-1.158 C28.065,15.442,28.507,16.944,28.507,18.504z" />
    <path d="M21.266,13.614C20.845,9.352,17.231,6,12.845,6c-3.624,0-6.838,2.331-7.99,5.723C2.113,12.124,0,14.475,0,17.327 C0,20.449,2.543,23,5.687,23h14.548C22.857,23,25,20.869,25,18.247C25,15.976,23.388,14.075,21.266,13.614z M20.326,21H5.606 C3.621,21,2,19.388,2,17.388c0-2,1.621-3.612,3.606-3.612c0.952,0,1.854,0.378,2.533,1.061c1.013,1.02,2.553-0.52,1.53-1.551 c-0.739-0.735-1.651-1.245-2.644-1.5C8.038,9.52,10.317,8,12.85,8c3.535,0,6.402,2.898,6.402,6.439 c0,0.694-0.111,1.378-0.324,2.031c-0.456,1.408,1.641,1.99,2.046,0.673c0.142-0.418,0.253-0.857,0.324-1.296 C22.281,16.224,23,17.184,23,18.327C23,19.796,21.805,21,20.326,21z" />
  </svg>
);
