import exp from "constants";
import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const EmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
  >
    <linearGradient
      id="a"
      x1={256}
      x2={256}
      y1={347.889}
      y2={0}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#da9621",
        }}
      />
      <stop
        offset={0.768}
        style={{
          stopColor: "#eaa12f",
        }}
      />
    </linearGradient>
    <path
      d="M511.972 170.467v11.507c-.6.427-1.372.937-2.143 1.448l-19.117 13.041c-1.285.853-2.828 1.875-4.371 2.984-7.973 5.283-18.345 12.358-25.203 16.876L293.376 329.769l-5.315 3.58-15.602 10.569c-1.972 1.278-4.286 2.301-6.858 2.983-1.029.34-2.229.511-3.343.681-.172.085-.343.085-.428.085-1.972.256-3.943.256-5.83.171-1.886.085-3.857.085-5.829-.171a27.086 27.086 0 0 1-3.772-.767c-2.572-.681-4.886-1.705-6.858-2.983l-7.029-4.774-8.572-5.795L50.862 216.324a276.656 276.656 0 0 0-6.429-4.262c-6-4.006-13.03-8.779-18.774-12.614-1.543-1.109-3.086-2.131-4.372-2.984L2.171 183.423c-.771-.511-1.543-1.022-2.143-1.448v-11.507c0-1.96.257-3.494.686-4.943 0-.084.086-.084.086-.084.429-.341.857-.597 1.371-.939l6.172-4.262 12.944-8.779c8.143-5.454 21.431-14.489 29.574-19.859L239.541 4.007C244.085 1.109 250.085-.255 256 .086c.6 0 1.114-.085 1.715-.085h.086c5.315 0 10.63 1.365 14.659 4.007l188.679 127.594c6.772 4.432 17.059 11.421 25.031 16.792 1.629 1.107 3.172 2.131 4.543 3.067l12.944 8.779 6.172 4.262c.514.341.943.597 1.371.939.515 1.447.772 3.066.772 5.026z"
      style={{
        fill: "url(#a)",
      }}
    />
    <linearGradient
      id="b"
      x1={256}
      x2={256}
      y1={398.917}
      y2={51.064}
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#da9621",
        }}
      />
      <stop
        offset={0.768}
        style={{
          stopColor: "#eaa12f",
        }}
      />
    </linearGradient>
    <path
      d="M512 221.49v11.441c-.625.443-1.429.976-2.141 1.508l-19.179 13.037c-8.116 5.41-21.407 14.455-29.524 19.866L272.502 394.875c-2.051 1.33-4.371 2.305-6.868 3.015-3.032.887-6.422 1.153-9.633.975-3.211.178-6.601-.089-9.633-.975-2.498-.71-4.817-1.685-6.868-3.015L50.845 267.341c-8.117-5.411-21.408-14.456-29.524-19.866L2.142 234.439c-.712-.533-1.516-1.065-2.141-1.508V221.49c0-1.951.268-3.548.714-4.966 0-.089.089-.089.089-.089.446-.355.892-.622 1.337-.977l6.245-4.257 12.934-8.78c8.116-5.41 21.407-14.455 29.524-19.866L239.499 55.023c4.549-2.927 10.614-4.258 16.501-3.903 5.887-.355 12.042.975 16.501 3.903l188.655 127.532c8.117 5.411 21.408 14.456 29.524 19.866l12.934 8.78 6.245 4.257c.445.355.891.621 1.337.977.536 1.418.804 3.104.804 5.055z"
      style={{
        fill: "url(#b)",
      }}
    />
    <path
      d="M262.258 314.513v35.968h-1.029l-11.487.767H.028V173.792c0-1.96.257-3.58.686-4.944 0-.085.086-.085.086-.085.943-2.983 2.829-4.688 5.315-5.114l10.716 6.307 5.057 2.983 23.06 13.553 1.2.681 14.659 8.609 166.819 98.359.343.171 33.089 19.433 1.2.768z"
      style={{
        fill: "#cc8529",
      }}
    />
    <path
      d="M266.715 336.247c0 .085-1.714 1.279-4.457 3.239a177.152 177.152 0 0 0-6.258 4.262c-1.2.767-2.486 1.619-3.857 2.557l-1.972 1.363-3.772 2.557-1.629 1.023-26.66 17.984c-2.829 1.875-5.658 3.835-8.229 5.626-4.886 3.324-8.916 6.051-10.287 6.903-1.972 1.449-10.201 6.99-18.345 12.529l-44.577 30.088-.172.171-.085.085-109.384 73.813c-1.886 1.279-3.943 2.642-5.915 4.006-1.115.767-2.229 1.449-3.343 2.216H8.515c-4.972 0-7.801-1.108-8.401-2.983v-.085c0-.341-.086-.597 0-1.023-.086-.512-.086-1.023-.086-1.62V173.792c0-1.96.257-3.58.686-4.944 0-.085.086-.085.086-.085.943-2.983 2.829-4.688 5.315-5.114.771-.256 1.457-.256 2.229-.171 1.886.085 4.029.938 6.344 2.472l30.346 20.456 1.114.767 13.116 8.864.771.512c8.058 5.455 20.745 14.064 28.632 19.348l153.446 103.729c.172.085.343.171.429.256l.771.512c2.057 1.363 4.029 2.728 5.829 3.92 3.001 1.96 5.401 3.665 6.858 4.688.857.512 1.458.852 1.543.937.343.255 2.486 1.705 4.715 3.324.086 0 .086.085.171.085 2.315 1.62 4.286 2.813 4.286 2.899z"
      style={{
        fill: "#f6b75a",
      }}
    />
    <path
      d="M511.865 171.974c.074 1 .134 2.92.134 4.267v323.257c0 .317-.089 1.248-.089 1.419V501.627c0 .024-.783.723-1.74 1.551-.957.829-7.747 1.507-9.094 1.507h-4.378c-1.347 0-3.365-.612-4.486-1.359l-5.204-3.489c-1.12-.748-2.95-1.976-4.066-2.731L332.776 395.641l-4.058-2.742-14.324-9.753a1373.46 1373.46 0 0 0-4.05-2.754l-14.412-9.754a1252.76 1252.76 0 0 0-4.055-2.747l-24.216-16.33-4.062-2.736-1.734-1.167a847.668 847.668 0 0 0-4.072-2.72s-.635-.421-1.795-1.219c-6.155-4.257-10.704-7.362-10.704-7.451 0-.089 1.963-1.329 4.282-2.926 2.318-1.597 2.885-1.986 2.885-1.986a337.009 337.009 0 0 0 2.332-1.607c.172-.122 2.109-1.383 3.214-2.152 0 0 5.125-3.567 10.657-7.204l.268-.178.668-.443c.073-.049.954-.617 1.74-1.153.785-.536 2.341-1.592 3.457-2.346l146.508-98.984a3606.7 3606.7 0 0 0 4.056-2.745l25.377-17.123a5759.21 5759.21 0 0 0 4.06-2.739l40.451-27.324c1.116-.754 3-1.892 4.187-2.529 0 0 1.065-.637 2.169-.881s3.079-.189 4.389.123l3.792 2.662c.776 1.103 2.005 4.241 2.079 5.241z"
      style={{
        fill: "#f0a642",
      }}
    />
    <path
      d="M511.999 458.657v40.265c0 .62 0 1.153-.089 1.685.089.355 0 .621 0 .976v.089c-.625 1.862-3.48 3.014-8.385 3.014H46.383l90.001-80.084.089-.089L249.13 324.297l10.972-9.668 2.942-2.661 9.723 5.677 239.232 141.012z"
      style={{
        fill: "#cc8529",
      }}
    />
    <path
      d="M511.999 497.414v1.508c0 .62 0 1.153-.089 1.685.089.355 0 .621 0 .976v.089c-.625 1.862-3.48 3.014-8.385 3.014H8.474c-4.905 0-7.76-1.152-8.385-3.014v-.089c0-.355-.089-.621 0-.976C0 500.075 0 499.542 0 498.922v-1.508c.803-1.064 1.963-2.128 3.479-3.193l238.07-173.651c.089 0 .089-.088.179-.176l.803-.532c4.905-3.46 9.901-5.855 13.469-6.74 1.249.354 2.586.797 4.104 1.507 2.854 1.153 6.154 3.016 9.365 5.233.356.265.624.443.981.708l238.069 173.651c1.516 1.153 2.676 2.217 3.48 3.193z"
      style={{
        fill: "#f6af47",
      }}
    />
  </svg>
)