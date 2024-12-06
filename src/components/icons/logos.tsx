import { SvgWrapper } from "./utils";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper
    viewBox="0 0 1024 1024"
    {...props}
    className={`${props.className} fill-primary`}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M512 512m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z"
        fill="#E9E8FF"
      />
      <path
        d="M723.2 704c-25.6 0-51.2-12.8-70.4-32L582.4 582.4H435.2l-38.4 64c-19.2 32-51.2 57.6-89.6 57.6-57.6 0-102.4-44.8-102.4-102.4v-12.8V576l25.6-166.4c6.4-70.4 57.6-121.6 128-121.6 32 0 70.4 12.8 89.6 38.4 25.6 0 89.6-6.4 128 0 25.6-25.6 57.6-32 89.6-32 51.2 0 96 32 115.2 83.2v12.8l38.4 179.2c0 6.4 6.4 19.2 6.4 32 0 51.2-44.8 102.4-102.4 102.4z"
        fill="#8880FE"
      />
      <path
        d="M716.8 460.8c-12.8 0-19.2-12.8-19.2-19.2s6.4-19.2 19.2-19.2c12.8 0 19.2 12.8 19.2 19.2s-6.4 19.2-19.2 19.2z m-108.8 0c-12.8 0-19.2-12.8-19.2-19.2s6.4-19.2 19.2-19.2c12.8 0 19.2 12.8 19.2 19.2s-6.4 19.2-19.2 19.2z m51.2 57.6c-6.4 0-19.2-6.4-19.2-19.2s6.4-19.2 19.2-19.2 19.2 12.8 19.2 19.2-6.4 19.2-19.2 19.2z m0-115.2c-6.4 0-19.2-6.4-19.2-19.2s6.4-19.2 19.2-19.2 19.2 12.8 19.2 19.2-6.4 19.2-19.2 19.2zM345.6 416h-51.2V448h51.2v51.2h32V448h51.2v-32h-51.2v-51.2h-32z"
        fill="#FFFFFF"
      />
    </g>
  </SvgWrapper>
);

export const VercelLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 283 64" {...props}>
    <path d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z" />
  </SvgWrapper>
);

export const NextLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 394 80" {...props}>
    <path d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" />
    <path d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" />
  </SvgWrapper>
);

export const NextUiLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 161 32" {...props}>
    <path d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z" />
    <path d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z" />
    <path d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z" />
  </SvgWrapper>
);

export const GithubLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 24 24" {...props}>
    <path
      clipRule="evenodd"
      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      fillRule="evenodd"
    />
  </SvgWrapper>
);

export const DiscordLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 24 24" {...props}>
    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
  </SvgWrapper>
);

export const TwitterLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 24 24" {...props}>
    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
  </SvgWrapper>
);
export const SteamLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 32 32" {...props}>
    <path
      d="M2.56967 20.0269C4.30041 25.7964 9.65423 30 15.9906 30C23.7274 30 29.9995 23.7318 29.9995 16C29.9995 8.26803 23.7274 2 15.9906 2C8.56634 2 2.49151 7.77172 2.01172 15.0699C2.01172 17.1667 2.01172 18.0417 2.56967 20.0269Z"
      fill="url(#paint0_linear_87_8314)"
    />
    <path
      d="M15.2706 12.5629L11.8426 17.5395C11.0345 17.5028 10.221 17.7314 9.54572 18.1752L2.01829 15.0784C2.01829 15.0784 1.84411 17.9421 2.56999 20.0763L7.89147 22.2707C8.15866 23.464 8.97779 24.5107 10.1863 25.0142C12.1635 25.8398 14.4433 24.8988 15.2658 22.922C15.4799 22.4052 15.5797 21.8633 15.5652 21.3225L20.5904 17.8219C23.5257 17.8219 25.9114 15.4305 25.9114 12.4937C25.9114 9.55673 23.5257 7.16748 20.5904 7.16748C17.7553 7.16748 15.1117 9.64126 15.2706 12.5629ZM14.4469 22.5783C13.8103 24.1057 12.054 24.8303 10.5273 24.1946C9.82302 23.9014 9.29128 23.3642 8.98452 22.7237L10.7167 23.4411C11.8426 23.9098 13.1343 23.3762 13.6023 22.2514C14.0718 21.1254 13.5392 19.8324 12.4139 19.3637L10.6233 18.6222C11.3142 18.3603 12.0997 18.3507 12.8336 18.6559C13.5734 18.9635 14.1475 19.5428 14.4517 20.283C14.756 21.0233 14.7548 21.8404 14.4469 22.5783ZM20.5904 16.0434C18.6364 16.0434 17.0455 14.4511 17.0455 12.4937C17.0455 10.5379 18.6364 8.94518 20.5904 8.94518C22.5457 8.94518 24.1365 10.5379 24.1365 12.4937C24.1365 14.4511 22.5457 16.0434 20.5904 16.0434ZM17.9341 12.4883C17.9341 11.0159 19.127 9.82159 20.5964 9.82159C22.0671 9.82159 23.2599 11.0159 23.2599 12.4883C23.2599 13.9609 22.0671 15.1541 20.5964 15.1541C19.127 15.1541 17.9341 13.9609 17.9341 12.4883Z"
      fill="white"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_87_8314"
        x1="16.0056"
        x2="16.0056"
        y1="2"
        y2="30"
      >
        <stop stopColor="#111D2E" />
        <stop offset="0.21248" stopColor="#051839" />
        <stop offset="0.40695" stopColor="#0A1B48" />
        <stop offset="0.5811" stopColor="#132E62" />
        <stop offset="0.7376" stopColor="#144B7E" />
        <stop offset="0.87279" stopColor="#136497" />
        <stop offset="1" stopColor="#1387B8" />
      </linearGradient>
    </defs>
  </SvgWrapper>
);

export const G2aLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="-.001 -1.13797229 87.486 26.0649723" {...props}>
    <path
      d="m38.313 9.88a7.08 7.08 0 0 0 -7.08 7.081v7.966h19.869l2.818-5.31h-17.13v-2.13a2.298 2.298 0 0 1 2.298-2.298h11.174a7.523 7.523 0 1 0 0-15.047l-13.298.003a5.31 5.31 0 0 0 -5.31 5.31h18.221a2.245 2.245 0 0 1 2.262 2.154 2.21 2.21 0 0 1 -2.208 2.271z"
      fill="#555e63"
    />
    <path
      d="m12.717 19.603a7.068 7.068 0 0 1 0-14.137l14.349-.01v-5.312l-14.687.01a12.38 12.38 0 0 0 0 24.76l14.687.011v-15.045h-15.932v5.311h10.375v4.425z"
      fill="#f05f00"
    />
    <g fill="#0084c1">
      <path d="m71.557 21.913h-.855a1.507 1.507 0 1 0 0 3.014h.855a1.507 1.507 0 0 0 0-3.014zm-.03 2.384h-.794a.877.877 0 0 1 0-1.754h.793a.877.877 0 0 1 0 1.754zm-5.979-.877a1.508 1.508 0 0 0 1.507 1.506h1.722v-.63h-1.691a.877.877 0 0 1 0-1.753h1.691v-.63h-1.722a1.508 1.508 0 0 0 -1.507 1.507zm10.851-1.507-.657 1.805-.657-1.805h-.832l-1.117 3.013h.709l.824-2.314.734 2.017h.678l.734-2.017.824 2.314h.708l-1.116-3.013z" />
      <circle cx="64.771" cy="24.515" r=".412" />
      <path d="m75.97 3a6.127 6.127 0 0 0 -1.703-2.063 4.75 4.75 0 0 0 -2.891-.937 4.523 4.523 0 0 0 -2.815.937 6.127 6.127 0 0 0 -1.704 2.063c-4.642 8.842-11.592 21.927-11.592 21.927h6.343l9.767-18.713 4.59 8.794h-7.067l2.492 4.758h7.059l2.693 5.16h6.343s-6.873-13.083-11.515-21.926z" />
    </g>
  </SvgWrapper>
);

export const EpicLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper
    className="fill-black stroke-white stroke-[1]"
    viewBox="0 0 32 32"
    {...props}
  >
    {/* <style type="text/css">{`
        .st0{fill:#FFFFFF;}
    `}</style> */}

    <path d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z" />

    <g>
      <path
        className="st0"
        d="M19.9,7.2c0-0.2,0-0.5,0.1-0.7c0.1-0.9,0.6-1.4,1.5-1.5c0.6-0.1,1.3-0.1,2,0c0.9,0.1,1.4,0.7,1.5,1.7   c0,0.8,0,1.7,0,2.5c0,0,0,0,0,0.1h-1.6c0-0.1,0-0.2,0-0.2c0-0.6,0-1.3,0-1.9c0-0.4-0.1-0.6-0.4-0.7c-0.2,0-0.5,0-0.8,0   c-0.3,0-0.4,0.2-0.4,0.5c0,0.1,0,0.2,0,0.3c0,2.3,0,4.6,0,6.8c0,0.1,0,0.2,0,0.3c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.4,0,0.5,0   c0.3,0,0.5-0.2,0.5-0.5c0-0.1,0-0.3,0-0.4c0-0.7,0-1.3,0-2c0-0.1,0-0.2,0-0.2h1.6c0,0.1,0,0.1,0,0.2c0,0.9,0,1.7,0,2.6   c0,0.2,0,0.4-0.1,0.7c-0.2,0.6-0.6,1.1-1.2,1.2c-0.7,0.1-1.5,0.1-2.2,0c-0.8-0.1-1.3-0.7-1.4-1.5c0-0.2,0-0.5,0-0.7   C19.9,11.8,19.9,9.5,19.9,7.2L19.9,7.2z"
      />

      <path className="st0" d="M17.3,5H19v11.4h-1.6V5z" />

      <path
        className="st0"
        d="M17.4,19.2h0.9v3.3h-0.9v-1.9l-0.1,0c-0.3,0.4-0.5,0.8-0.8,1.3c-0.3-0.4-0.6-0.9-0.8-1.3h-0.1v1.9h-0.8v-3.3   h0.9c0.3,0.4,0.5,0.8,0.8,1.3C16.9,20,17.1,19.6,17.4,19.2L17.4,19.2z"
      />

      <path
        className="st0"
        d="M7.1,5h3.7l0,1.6H8.8v3.2h2v1.5h-2v3.4h2.1v1.5H7.1L7.1,5z"
      />

      <path
        className="st0"
        d="M10.3,22.1c-0.4,0.3-0.8,0.5-1.3,0.5c-0.9,0-1.7-0.4-1.9-1.4c-0.2-1.3,0.7-2.1,1.7-2.1c0.4,0,0.9,0.1,1.2,0.3   c0.1,0,0.1,0.1,0.2,0.1C10,19.8,9.8,20,9.6,20.2c-0.3-0.2-0.7-0.4-1.1-0.2C8.3,20,8.2,20.1,8,20.3c-0.3,0.4-0.2,1,0.1,1.3   c0.3,0.3,0.9,0.3,1.2,0.1v-0.4H8.8v-0.7h1.5L10.3,22.1L10.3,22.1z"
      />

      <path
        className="st0"
        d="M18.8,27.3c-0.9,0.3-1.8,0.6-2.7,0.9c-0.1,0-0.2,0-0.4,0c-1.4-0.5-2.9-1-4.3-1.5c0,0-0.1,0-0.2-0.1h9.4v0   C20.1,26.9,19.5,27.1,18.8,27.3L18.8,27.3z"
      />

      <path
        className="st0"
        d="M21.8,22.5h-2.7v-3.3h2.6v0.7h-1.8v0.6h1.6v0.7h-1.6v0.6h1.8V22.5z"
      />

      <path
        className="st0"
        d="M24.5,22.4c-0.6,0.4-1.9,0.2-2.4-0.3c0.2-0.2,0.3-0.4,0.5-0.6c0.3,0.2,0.6,0.4,1,0.4c0.1,0,0.2,0,0.3,0   c0.1,0,0.1-0.1,0.2-0.2c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.4-0.1-0.6-0.2c-0.3-0.1-0.5-0.3-0.6-0.7   c0-0.4,0.1-0.8,0.4-1c0.4-0.3,0.9-0.3,1.4-0.2c0.3,0.1,0.6,0.2,0.8,0.4c-0.1,0.2-0.3,0.4-0.4,0.6c-0.3-0.1-0.6-0.2-0.9-0.3   c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0.1,0.2,0.1,0.2c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2   c0.3,0.1,0.5,0.4,0.5,0.8C25,21.9,24.9,22.2,24.5,22.4L24.5,22.4z"
      />

      <path
        className="st0"
        d="M16.5,6.8c0-0.5-0.2-1.1-0.6-1.4C15.5,5.1,15.1,5,14.7,5c-0.9,0-1.8,0-2.7,0c-0.1,0-0.2,0-0.2,0v11.3h1.7v-4.1   c0.1,0,0.2,0,0.3,0c0.4,0,0.8,0,1.2,0c0.9-0.1,1.5-0.7,1.5-1.6C16.5,9.3,16.5,8.1,16.5,6.8L16.5,6.8z M14.8,10.2   c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.6,0-0.9,0V6.6c0.3,0,0.6,0,0.8,0c0.3,0,0.5,0.2,0.5,0.6C14.8,8.2,14.8,9.2,14.8,10.2z"
      />

      <path
        className="st0"
        d="M12.9,19.2h-0.8c-0.5,1.1-0.9,2.2-1.4,3.4h0.9c0.1-0.2,0.2-0.4,0.2-0.6h1.4c0.1,0.2,0.2,0.4,0.3,0.6h0.9   C13.9,21.4,13.4,20.3,12.9,19.2L12.9,19.2z M12.1,21.2c0.1-0.3,0.3-0.6,0.4-1c0.1,0.4,0.3,0.7,0.4,1H12.1z"
      />
    </g>
  </SvgWrapper>
);
export const EnebaLogo: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <SvgWrapper viewBox="0 0 652 652" {...props}>
    <style type="text/css">{`
    .st1{fill:#FD5A20;}
    .st2{fill:#FDBF45;}
    .st3{fill:#FA9837;}
    .st4{fill:#A30011;}
    .st5{fill:#F33D96;}
    .st6{fill:#E10D66;}
    .st7{fill:#1F9175;}
    .st8{fill:#7EF4C3;}
    .st9{fill:#4CD69E;}
    .st10{fill:#4618AC;}
`}</style>
    <path
      className="st1"
      d="M21,321c-0.1,10.8,9.6,13.7,14.4,4.3c7.9-15.9,27.8-22.3,50.5-18.6C105.8,309.9,29.4,263.1,21,321z"
    />
    <path
      className="st2"
      d="M136.7,265.4c-3.2-6.4-8.1-11.8-14.2-15.5c0.2-0.5,0.5-0.9,0.8-1.3c1.3-1.3,1.7-3.2,1.2-4.9
  c-0.4-1.3-0.1-2.6,0.7-3.6c0.9-1.1,1.2-2.5,0.9-3.9c-0.2-0.8,0-1.7,0.3-2.5c0.8-1.8,1.9-4.9-0.3-6.1c-2.5-1.4-5.9,1.8-7.2,4.6
  c-0.4,0.9-1.1,1.6-2,2c-1.8,0.8-3.2,2.3-3.8,4.1c-0.3,1.2-1.2,2.1-2.3,2.6c-1.6,0.6-2.8,1.8-3.6,3.3c-12.8-2-26-0.3-37.9,4.8
  c-13.7,5.5-25.6,14.7-34.5,26.6C25.2,288.8,20.4,304.8,21,321c0.9-4.7,3.9-8.7,8.1-10.8c5.3-2.8,11-4.5,16.9-5.1
  c7.2-0.8,14.4-1,21.5-0.5c7.3,0.4,14.6,1.3,21.9,2.7c8.2,1.7,16.8,1.5,24.9-0.7c6.4-1.8,12.2-5.3,16.8-10.2c4-4.2,6.6-9.5,7.7-15.2
  C139.9,275.9,139.1,270.3,136.7,265.4z"
    />
    <path
      className="st3"
      d="M89.5,307.4c27.3,5.2,44.7-8.5,48.8-23.8c-19.3,40.2-53.6,11.6-94,13.5c-13.7,0.6-21.6-4.3-7.4-24
  c-11,13.5-16.6,30.6-15.9,48C24,302.1,62,302.2,89.5,307.4z"
    />
    <path
      className="st4"
      d="M159.7,244.1c-9.3-5.4-16.7,1.5-10.9,10.3c9.7,14.8,5.4,35.2-9.2,53C126.9,323,205.7,280.4,159.7,244.1z"
    />
    <path
      className="st5"
      d="M199.6,316.9c9.8-7.7,8.6-12.1-1.4-13.1c-0.7-8.6-2.8-17.1-6.2-25c-6.5-14.9-17.9-27.1-32.4-34.7
  c3.6,3.1,5.6,7.7,5.3,12.4c-0.2,6-1.6,11.8-4.1,17.2c-2.9,6.6-6.3,12.9-10.4,18.9c-4.1,6.1-8.5,12-13.3,17.6
  c-5.6,6.3-9.7,13.8-11.8,21.9c-1.6,6.5-1.5,13.2,0.4,19.6c1.7,5.6,4.9,10.5,9.3,14.3c4.1,3.6,9.3,5.7,14.8,6.1
  c12.3,0.7,24.2-4.5,32.1-13.9c2.1-2.4,4-4.9,5.6-7.6c0.5-0.7,1.1-1.3,1.8-1.8c17.2-10.3,19.3-15.9,8.3-17
  C213.1,322.1,213,317.1,199.6,316.9L199.6,316.9z"
    />
    <path
      className="st6"
      d="M137.3,310.2c-18.2,21.1-15.1,43-3.8,54.2c-25.1-36.8,16.8-52.2,35.4-88.1c6.3-12.2,14.5-16.5,24.5,5.6
  c-6.2-16.3-18.2-29.7-33.6-37.8C174.6,256.2,155.6,289.1,137.3,310.2L137.3,310.2z"
    />
    <path
      className="st7"
      d="M156.9,402.5c9.4-5.4,7.1-15.2-3.5-14.6c-17.7,1.1-33.2-12.8-41.4-34.3C104.8,334.8,102.5,424.3,156.9,402.5
  L156.9,402.5z"
    />
    <path
      className="st8"
      d="M143.4,400.9c-5-3.2-9.4-7.3-12.9-12.1c-4.3-5.8-8.1-11.9-11.3-18.4c-3.3-6.6-6.2-13.3-8.6-20.3l-0.5-1.4
  c5.9-4.4,7.9-7.8,6.1-10.2c-1.6-2-6.1-3.3-13.5-3.7c-1.5-2.1-3.3-4-5.1-5.8c-4.8-4.6-10.7-7.9-17.2-9.4c-5.7-1.3-11.6-1-17,0.9
  c-5.2,1.8-9.6,5.2-12.7,9.8c-6.1,9.3-7.9,20.8-4.9,31.5c-4.4,6-6.2,10.3-5.6,12.8c0.7,3,4.7,3.5,11.8,1.7
  c4.8,7.9,11.1,14.8,18.4,20.5c11.7,9.1,25.6,14.8,40.3,16.5c16.2,1.8,32.4-2.1,46.1-10.8C152.4,404.1,147.4,403.5,143.4,400.9z"
    />
    <path
      className="st9"
      d="M110.7,350.1c-9.2-26.2-29.8-34.4-45.1-30.3c44.4-3.5,37,40.5,58.9,74.5c7.4,11.5,7.1,20.8-17,18.5
  c17.2,2.7,34.8-1,49.5-10.4C139,409.4,120,376.5,110.7,350.1z"
    />
    <path
      className="st10"
      d="M339,296.3c1.1-1.3,2.2-2.6,3.4-3.8c1.4-1.3,2.9-2.5,4.6-3.4c1.9-1.1,3.9-1.9,6.1-2.4c2.6-0.7,5.2-1,7.9-0.9
  c3,0,5.9,0.4,8.8,1.1c2.7,0.7,5.3,2,7.5,3.8c2.2,1.8,4,4.2,5.2,6.8c1.4,3.3,2.1,6.8,1.9,10.3V354h-26v-38.3c0.1-2.4-0.5-4.8-1.6-6.9
  c-1.4-2.1-3.9-3.2-6.4-2.9c-1.5,0-3.1,0.3-4.5,0.9c-1.2,0.6-2.3,1.4-3.2,2.3c-0.9,0.9-1.5,1.9-1.9,3.1c-0.4,1.1-0.7,2.2-0.8,3.3V354
  h-26v-66.9h0.9C323.8,287.1,332.4,290.4,339,296.3z M540.1,298.3c-1.3-2.6-3.2-5-5.5-6.8c-2.3-1.8-4.8-3.3-7.6-4.2
  c-2.7-0.9-5.5-1.4-8.3-1.4c-4,0-7.9,0.9-11.5,2.5c-3.4,1.5-6.5,3.5-9.2,6.1v-28.1c0.3-1.8-0.3-3.6-1.5-4.9c-6.3-4.9-14-7.5-22-7.5
  h-2.5V354h2.5c8,0,15.7-2.6,22-7.5l0.8-0.6c1,1.3,2.1,2.5,3.3,3.6c1.2,1.2,2.6,2.2,4.1,3c1.7,0.9,3.4,1.6,5.2,2
  c2.2,0.5,4.5,0.8,6.8,0.7c3.4,0,6.7-0.5,9.9-1.5c2.9-0.9,5.7-2.4,8.1-4.4c2.3-1.9,4.2-4.4,5.4-7.1c1.4-3,2.1-6.3,2-9.6v-25
  C542.3,304.4,541.6,301.2,540.1,298.3L540.1,298.3z M516.2,326.8c0,6.4-2.7,9.6-8,9.6c-2.8,0.2-5.4-0.8-7.4-2.8
  c-1.7-1.5-2.6-3.6-2.7-5.9v-13.5c0-1.1,0.3-2.3,0.7-3.3c0.5-1.2,1.2-2.2,2.1-3.1c1-1,2.1-1.8,3.4-2.4c1.4-0.6,2.9-1,4.5-0.9
  c2.2-0.2,4.4,0.8,5.8,2.6c1.3,2.2,1.9,4.8,1.8,7.4V326.8z M552.8,299.4c1.3-2.8,3.1-5.3,5.4-7.3c2.4-2.1,5.1-3.6,8.1-4.6
  c3.2-1.1,6.5-1.6,9.9-1.6c2.2,0,4.4,0.2,6.5,0.7c1.8,0.4,3.5,1,5.1,1.9c1.4,0.8,2.8,1.7,4.1,2.8c1.2,1,2.3,2.2,3.3,3.5l2.3-1.5
  c5.9-4,12.9-6.1,20-6.1h3.4V354h-3.4c-7.1,0-14.1-2.1-20-6.1l-2.3-1.5c-2.6,2.8-5.7,4.9-9.2,6.4c-3.7,1.6-7.6,2.5-11.6,2.5
  c-2.8,0-5.6-0.4-8.3-1.3c-2.7-0.8-5.3-2.2-7.6-3.9c-2.3-1.8-4.2-4-5.5-6.6c-1.5-2.9-2.2-6.1-2.1-9.3v-25
  C550.8,305.8,551.5,302.4,552.8,299.4L552.8,299.4z M588.8,335.5c1.3-0.6,2.4-1.4,3.4-2.4c0.9-0.9,1.6-2,2.1-3.1
  c0.4-1.1,0.7-2.2,0.7-3.3v-14.1c-0.3-2.1-1.3-4-2.9-5.4c-2-1.8-4.5-2.7-7.2-2.6c-5.3,0-8,3.2-8,9.6v12.2c-0.2,2.6,0.4,5.2,1.8,7.4
  c1.3,1.8,3.5,2.8,5.8,2.6C585.9,336.5,587.4,336.2,588.8,335.5z M463.5,325v-13.5c0-3.6-0.9-7.1-2.6-10.2c-1.8-3.2-4.3-6-7.3-8.1
  c-3.4-2.4-7.1-4.2-11.1-5.4c-4.5-1.3-9.1-2-13.8-1.9c-4.9,0-9.7,0.7-14.3,2.2c-4.1,1.3-7.9,3.3-11.3,6c-3.1,2.4-5.6,5.5-7.5,8.9
  c-1.8,3.4-2.7,7.3-2.7,11.1v15.6c-0.1,4.1,1,8.1,3.2,11.6c2.1,3.2,4.9,5.9,8.2,7.9c3.6,2.1,7.5,3.7,11.6,4.6c4.5,1,9,1.5,13.6,1.5
  c4.7,0.1,9.4-0.5,13.9-1.7c3.8-1,7.5-2.6,10.8-4.8c2.8-1.9,5.2-4.4,6.9-7.4c0.5-0.8,0.9-1.7,1.2-2.5c-6-5.3-13.8-8.2-21.8-8.2v0.9
  c0,3.7-3.4,5.6-10.3,5.6c-3,0.2-5.9-0.5-8.5-1.9c-2-1.6-3-4.1-2.8-6.7v-3.5L463.5,325z M421.1,305.9c2.1-2.1,5.1-3.1,8-2.8
  c2.8-0.3,5.5,0.6,7.6,2.4c1.5,1.8,2.3,4.1,2.1,6.4v0.6H419C418.9,310.2,419.7,307.8,421.1,305.9L421.1,305.9z M305.4,325v-13.5
  c0-3.6-0.9-7.1-2.6-10.2c-1.8-3.2-4.3-6-7.3-8.1c-3.4-2.4-7.1-4.2-11.1-5.4c-4.5-1.3-9.1-2-13.8-1.9c-4.9,0-9.7,0.7-14.3,2.2
  c-4.1,1.3-7.9,3.3-11.3,6c-3.1,2.4-5.6,5.5-7.5,8.9c-1.8,3.4-2.7,7.3-2.7,11.1v15.6c-0.1,4.1,1,8.1,3.1,11.6
  c2.1,3.2,4.9,5.9,8.2,7.9c3.6,2.1,7.5,3.7,11.6,4.6c4.5,1,9,1.5,13.6,1.5c4.7,0.1,9.4-0.5,13.9-1.7c3.8-1,7.5-2.6,10.7-4.8
  c2.8-1.9,5.2-4.4,6.9-7.4c0.5-0.8,0.9-1.7,1.2-2.5c-6-5.3-13.8-8.2-21.8-8.2v0.9c0,3.7-3.4,5.6-10.3,5.6c-3,0.2-5.9-0.5-8.5-1.9
  c-2-1.6-3-4.1-2.8-6.7v-3.5L305.4,325z M263,305.9c2.1-2.1,5.1-3.1,8-2.8c2.8-0.3,5.5,0.6,7.6,2.4c1.5,1.8,2.3,4.1,2.1,6.4v0.6
  h-19.9C260.8,310.2,261.6,307.8,263,305.9z"
    />
  </SvgWrapper>
);
