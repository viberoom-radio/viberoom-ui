import React from 'react';
import { SvgProps } from '../../types';

export const AudiusIcon = ({ color = 'currentColor', size = 24 }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke="none"
    >
      <path d="M11.595 1.78216C11.425 1.85342 11.3264 2.00141 10.6412 3.17989C9.56688 5.03257 9.01875 5.98084 8.92557 6.1398C8.87076 6.24394 8.68988 6.55089 8.53092 6.82496C8.1253 7.51012 7.30311 8.9243 7.17155 9.15451C7.07289 9.33539 4.20069 14.285 3.96499 14.6906C3.5813 15.3429 3.35109 15.7924 3.35109 15.8856C3.35109 16.0829 3.44975 16.2692 3.60871 16.3734C3.74574 16.4666 3.93759 16.4721 6.03692 16.4775C7.77998 16.483 8.35003 16.4721 8.48159 16.4172C8.64603 16.3515 8.73921 16.2199 9.16127 15.4854C10.5097 13.123 11.3428 11.7252 11.4744 11.5992C11.6169 11.4676 11.6772 11.4512 11.8581 11.4731C12.1924 11.517 12.0938 11.3854 13.3271 13.5121C14.8344 16.1158 15.1359 16.6639 15.1359 16.768C15.1359 16.9544 14.9934 17.1846 14.8344 17.2559C14.7303 17.3052 13.9793 17.3217 12.0335 17.3217C9.80806 17.3217 9.34763 17.3326 9.22156 17.4039C9.11194 17.4587 8.9475 17.6889 8.68988 18.1274C8.48707 18.4837 8.21848 18.9441 8.09241 19.1579C7.23185 20.605 6.74949 21.4929 6.74949 21.6135C6.74949 21.8273 6.84816 22.0082 7.02356 22.1068C7.16607 22.1945 7.81287 22.2 15.2181 22.2H23.2592L23.4181 22.0301C23.6922 21.7341 23.6593 21.6135 22.9084 20.3144C22.5411 19.6786 22.0259 18.7852 21.7683 18.3357C21.0995 17.1791 14.511 5.79995 13.9136 4.76947C13.645 4.30356 13.3709 3.83217 13.3106 3.72802C12.598 2.4728 12.2472 1.89727 12.1541 1.83697C11.9677 1.72187 11.7758 1.69994 11.595 1.78216Z" />
    </svg>
  );
};