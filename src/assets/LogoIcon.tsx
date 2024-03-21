import React from 'react'

type LogoIconProps = {
  className: string
  width?: number
  height?: number
}

const LogoIcon = (props: LogoIconProps) => {
  return (
    <svg
      width="369"
      height="31"
      viewBox="0 0 369 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_603_147)">
        <path
          d="M72.621 17.826C72.621 16 72.995 14.383 73.743 12.975C74.513 11.567 75.547 10.478 76.845 9.708C78.165 8.916 79.617 8.52 81.201 8.52C82.631 8.52 83.874 8.806 84.93 9.378C86.008 9.928 86.866 10.621 87.504 11.457V8.817H91.299V27H87.504V24.294C86.866 25.152 85.997 25.867 84.897 26.439C83.797 27.011 82.543 27.297 81.135 27.297C79.573 27.297 78.143 26.901 76.845 26.109C75.547 25.295 74.513 24.173 73.743 22.743C72.995 21.291 72.621 19.652 72.621 17.826ZM87.504 17.892C87.504 16.638 87.24 15.549 86.712 14.625C86.206 13.701 85.535 12.997 84.699 12.513C83.863 12.029 82.961 11.787 81.993 11.787C81.025 11.787 80.123 12.029 79.287 12.513C78.451 12.975 77.769 13.668 77.241 14.592C76.735 15.494 76.482 16.572 76.482 17.826C76.482 19.08 76.735 20.18 77.241 21.126C77.769 22.072 78.451 22.798 79.287 23.304C80.145 23.788 81.047 24.03 81.993 24.03C82.961 24.03 83.863 23.788 84.699 23.304C85.535 22.82 86.206 22.116 86.712 21.192C87.24 20.246 87.504 19.146 87.504 17.892ZM100.002 11.457C100.552 10.533 101.278 9.818 102.18 9.312C103.104 8.784 104.193 8.52 105.447 8.52V12.414H104.49C103.016 12.414 101.894 12.788 101.124 13.536C100.376 14.284 100.002 15.582 100.002 17.43V27H96.2403V8.817H100.002V11.457ZM113.294 11.886V21.951C113.294 22.633 113.448 23.128 113.756 23.436C114.086 23.722 114.636 23.865 115.406 23.865H117.716V27H114.746C113.052 27 111.754 26.604 110.852 25.812C109.95 25.02 109.499 23.733 109.499 21.951V11.886H107.354V8.817H109.499V4.296H113.294V8.817H117.716V11.886H113.294ZM130.589 8.52C131.975 8.52 133.207 8.817 134.285 9.411C135.385 10.005 136.243 10.885 136.859 12.051C137.497 13.217 137.816 14.625 137.816 16.275V27H134.087V16.836C134.087 15.208 133.68 13.965 132.866 13.107C132.052 12.227 130.941 11.787 129.533 11.787C128.125 11.787 127.003 12.227 126.167 13.107C125.353 13.965 124.946 15.208 124.946 16.836V27H121.184V2.58H124.946V10.929C125.584 10.159 126.387 9.565 127.355 9.147C128.345 8.729 129.423 8.52 130.589 8.52ZM159.081 8.817V27H155.319V24.855C154.725 25.603 153.944 26.197 152.976 26.637C152.03 27.055 151.018 27.264 149.94 27.264C148.51 27.264 147.223 26.967 146.079 26.373C144.957 25.779 144.066 24.899 143.406 23.733C142.768 22.567 142.449 21.159 142.449 19.509V8.817H146.178V18.948C146.178 20.576 146.585 21.83 147.399 22.71C148.213 23.568 149.324 23.997 150.732 23.997C152.14 23.997 153.251 23.568 154.065 22.71C154.901 21.83 155.319 20.576 155.319 18.948V8.817H159.081ZM167.807 11.457C168.357 10.533 169.083 9.818 169.985 9.312C170.909 8.784 171.998 8.52 173.252 8.52V12.414H172.295C170.821 12.414 169.699 12.788 168.929 13.536C168.181 14.284 167.807 15.582 167.807 17.43V27H164.045V8.817H167.807V11.457ZM194.687 8.52C196.073 8.52 197.305 8.817 198.383 9.411C199.483 10.005 200.341 10.885 200.957 12.051C201.595 13.217 201.914 14.625 201.914 16.275V27H198.185V16.836C198.185 15.208 197.778 13.965 196.964 13.107C196.15 12.227 195.039 11.787 193.631 11.787C192.223 11.787 191.101 12.227 190.265 13.107C189.451 13.965 189.044 15.208 189.044 16.836V27H185.282V2.58H189.044V10.929C189.682 10.159 190.485 9.565 191.453 9.147C192.443 8.729 193.521 8.52 194.687 8.52ZM205.459 17.826C205.459 16 205.833 14.383 206.581 12.975C207.351 11.567 208.385 10.478 209.683 9.708C211.003 8.916 212.455 8.52 214.039 8.52C215.469 8.52 216.712 8.806 217.768 9.378C218.846 9.928 219.704 10.621 220.342 11.457V8.817H224.137V27H220.342V24.294C219.704 25.152 218.835 25.867 217.735 26.439C216.635 27.011 215.381 27.297 213.973 27.297C212.411 27.297 210.981 26.901 209.683 26.109C208.385 25.295 207.351 24.173 206.581 22.743C205.833 21.291 205.459 19.652 205.459 17.826ZM220.342 17.892C220.342 16.638 220.078 15.549 219.55 14.625C219.044 13.701 218.373 12.997 217.537 12.513C216.701 12.029 215.799 11.787 214.831 11.787C213.863 11.787 212.961 12.029 212.125 12.513C211.289 12.975 210.607 13.668 210.079 14.592C209.573 15.494 209.32 16.572 209.32 17.826C209.32 19.08 209.573 20.18 210.079 21.126C210.607 22.072 211.289 22.798 212.125 23.304C212.983 23.788 213.885 24.03 214.831 24.03C215.799 24.03 216.701 23.788 217.537 23.304C218.373 22.82 219.044 22.116 219.55 21.192C220.078 20.246 220.342 19.146 220.342 17.892ZM245.545 8.817V27H241.783V24.855C241.189 25.603 240.408 26.197 239.44 26.637C238.494 27.055 237.482 27.264 236.404 27.264C234.974 27.264 233.687 26.967 232.543 26.373C231.421 25.779 230.53 24.899 229.87 23.733C229.232 22.567 228.913 21.159 228.913 19.509V8.817H232.642V18.948C232.642 20.576 233.049 21.83 233.863 22.71C234.677 23.568 235.788 23.997 237.196 23.997C238.604 23.997 239.715 23.568 240.529 22.71C241.365 21.83 241.783 20.576 241.783 18.948V8.817H245.545ZM267.174 17.463C267.174 18.145 267.13 18.761 267.042 19.311H253.149C253.259 20.763 253.798 21.929 254.766 22.809C255.734 23.689 256.922 24.129 258.33 24.129C260.354 24.129 261.784 23.282 262.62 21.588H266.679C266.129 23.26 265.128 24.635 263.676 25.713C262.246 26.769 260.464 27.297 258.33 27.297C256.592 27.297 255.03 26.912 253.644 26.142C252.28 25.35 251.202 24.25 250.41 22.842C249.64 21.412 249.255 19.762 249.255 17.892C249.255 16.022 249.629 14.383 250.377 12.975C251.147 11.545 252.214 10.445 253.578 9.675C254.964 8.905 256.548 8.52 258.33 8.52C260.046 8.52 261.575 8.894 262.917 9.642C264.259 10.39 265.304 11.446 266.052 12.81C266.8 14.152 267.174 15.703 267.174 17.463ZM263.247 16.275C263.225 14.889 262.73 13.778 261.762 12.942C260.794 12.106 259.595 11.688 258.165 11.688C256.867 11.688 255.756 12.106 254.832 12.942C253.908 13.756 253.358 14.867 253.182 16.275H263.247ZM280.05 8.52C281.48 8.52 282.756 8.817 283.878 9.411C285.022 10.005 285.913 10.885 286.551 12.051C287.189 13.217 287.508 14.625 287.508 16.275V27H283.779V16.836C283.779 15.208 283.372 13.965 282.558 13.107C281.744 12.227 280.633 11.787 279.225 11.787C277.817 11.787 276.695 12.227 275.859 13.107C275.045 13.965 274.638 15.208 274.638 16.836V27H270.876V8.817H274.638V10.896C275.254 10.148 276.035 9.565 276.981 9.147C277.949 8.729 278.972 8.52 280.05 8.52ZM298.907 27.297C297.477 27.297 296.19 27.044 295.046 26.538C293.924 26.01 293.033 25.306 292.373 24.426C291.713 23.524 291.361 22.523 291.317 21.423H295.211C295.277 22.193 295.64 22.842 296.3 23.37C296.982 23.876 297.829 24.129 298.841 24.129C299.897 24.129 300.711 23.931 301.283 23.535C301.877 23.117 302.174 22.589 302.174 21.951C302.174 21.269 301.844 20.763 301.184 20.433C300.546 20.103 299.523 19.74 298.115 19.344C296.751 18.97 295.64 18.607 294.782 18.255C293.924 17.903 293.176 17.364 292.538 16.638C291.922 15.912 291.614 14.955 291.614 13.767C291.614 12.799 291.9 11.919 292.472 11.127C293.044 10.313 293.858 9.675 294.914 9.213C295.992 8.751 297.224 8.52 298.61 8.52C300.678 8.52 302.339 9.048 303.593 10.104C304.869 11.138 305.551 12.557 305.639 14.361H301.877C301.811 13.547 301.481 12.898 300.887 12.414C300.293 11.93 299.49 11.688 298.478 11.688C297.488 11.688 296.729 11.875 296.201 12.249C295.673 12.623 295.409 13.118 295.409 13.734C295.409 14.218 295.585 14.625 295.937 14.955C296.289 15.285 296.718 15.549 297.224 15.747C297.73 15.923 298.478 16.154 299.468 16.44C300.788 16.792 301.866 17.155 302.702 17.529C303.56 17.881 304.297 18.409 304.913 19.113C305.529 19.817 305.848 20.752 305.87 21.918C305.87 22.952 305.584 23.876 305.012 24.69C304.44 25.504 303.626 26.142 302.57 26.604C301.536 27.066 300.315 27.297 298.907 27.297ZM314.324 11.886V21.951C314.324 22.633 314.478 23.128 314.786 23.436C315.116 23.722 315.666 23.865 316.436 23.865H318.746V27H315.776C314.082 27 312.784 26.604 311.882 25.812C310.98 25.02 310.529 23.733 310.529 21.951V11.886H308.384V8.817H310.529V4.296H314.324V8.817H318.746V11.886H314.324ZM338.878 17.463C338.878 18.145 338.834 18.761 338.746 19.311H324.853C324.963 20.763 325.502 21.929 326.47 22.809C327.438 23.689 328.626 24.129 330.034 24.129C332.058 24.129 333.488 23.282 334.324 21.588H338.383C337.833 23.26 336.832 24.635 335.38 25.713C333.95 26.769 332.168 27.297 330.034 27.297C328.296 27.297 326.734 26.912 325.348 26.142C323.984 25.35 322.906 24.25 322.114 22.842C321.344 21.412 320.959 19.762 320.959 17.892C320.959 16.022 321.333 14.383 322.081 12.975C322.851 11.545 323.918 10.445 325.282 9.675C326.668 8.905 328.252 8.52 330.034 8.52C331.75 8.52 333.279 8.894 334.621 9.642C335.963 10.39 337.008 11.446 337.756 12.81C338.504 14.152 338.878 15.703 338.878 17.463ZM334.951 16.275C334.929 14.889 334.434 13.778 333.466 12.942C332.498 12.106 331.299 11.688 329.869 11.688C328.571 11.688 327.46 12.106 326.536 12.942C325.612 13.756 325.062 14.867 324.886 16.275H334.951ZM344.494 6.408C343.812 6.408 343.24 6.177 342.778 5.715C342.316 5.253 342.085 4.681 342.085 3.999C342.085 3.317 342.316 2.745 342.778 2.283C343.24 1.821 343.812 1.59 344.494 1.59C345.154 1.59 345.715 1.821 346.177 2.283C346.639 2.745 346.87 3.317 346.87 3.999C346.87 4.681 346.639 5.253 346.177 5.715C345.715 6.177 345.154 6.408 344.494 6.408ZM346.342 8.817V27H342.58V8.817H346.342ZM360.455 8.52C361.885 8.52 363.161 8.817 364.283 9.411C365.427 10.005 366.318 10.885 366.956 12.051C367.594 13.217 367.913 14.625 367.913 16.275V27H364.184V16.836C364.184 15.208 363.777 13.965 362.963 13.107C362.149 12.227 361.038 11.787 359.63 11.787C358.222 11.787 357.1 12.227 356.264 13.107C355.45 13.965 355.043 15.208 355.043 16.836V27H351.281V8.817H355.043V10.896C355.659 10.148 356.44 9.565 357.386 9.147C358.354 8.729 359.377 8.52 360.455 8.52Z"
          className="fill-slate-900 dark:fill-white"
        />
        <g clipPath="url(#clip1_603_147)">
          <mask
            id="mask0_603_147"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="-44"
            y="0"
            width="102"
            height="72"
          >
            <path
              d="M-43.3652 71.3019L-43.4434 0.302002L57.0065 0.196785L57.0847 71.1967L-43.3652 71.3019Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_603_147)">
            <g filter="url(#filter0_d_603_147)">
              <path
                d="M16.9491 34.8564L6.92079 44.6612L-3.12903 34.8775L6.89926 25.0728L16.9491 34.8564Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter1_d_603_147)"></g>
            <g filter="url(#filter2_d_603_147)">
              <path
                d="M6.8391 25.1318L-3.1892 34.9365L-13.239 25.1528L-3.21072 15.3481L6.8391 25.1318Z"
                fill="#1BB3E0"
                fillOpacity="0.6"
              />
            </g>
            <g filter="url(#filter3_d_603_147)">
              <path
                d="M37.0267 34.7178L26.9985 44.5225L16.9486 34.7388L26.9769 24.9341L37.0267 34.7178Z"
                fill="#1BB3E0"
              />
            </g>
            <g filter="url(#filter4_d_603_147)"></g>
            <g filter="url(#filter5_d_603_147)">
              <path
                d="M26.9169 24.9932L16.8886 34.7979L6.83875 25.0142L16.867 15.2095L26.9169 24.9932Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter6_d_603_147)">
              <path
                d="M16.8069 15.2686L6.77868 25.0733L-3.27124 15.2896L6.75705 5.48486L16.8069 15.2686Z"
                fill="#1BB3E0"
                fillOpacity="0.6"
              />
            </g>
            <g filter="url(#filter7_d_603_147)">
              <path
                d="M46.9945 24.8542L36.9662 34.659L26.9164 24.8753L36.9447 15.0706L46.9945 24.8542Z"
                fill="#1BB3E0"
              />
            </g>
            <g filter="url(#filter8_d_603_147)">
              <path
                d="M36.8845 15.1299L26.8562 24.9346L16.8064 15.151L26.8347 5.34619L36.8845 15.1299Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter9_d_603_147)">
              <path
                d="M56.9621 14.991L46.9339 24.7957L36.884 15.012L46.9123 5.20728L56.9621 14.991Z"
                fill="#1BB3E0"
              />
            </g>
          </g>
          <mask
            id="mask1_603_147"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="-44"
            y="-41"
            width="102"
            height="72"
          >
            <path
              d="M-43.9999 -40.1366L-43.3589 30.8606L57.0872 29.9974L56.4462 -40.9999L-43.9999 -40.1366Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_603_147)">
            <g filter="url(#filter10_d_603_147)"></g>
            <g filter="url(#filter11_d_603_147)">
              <path
                d="M16.6804 -4.27433L6.55334 -13.9819L-3.39685 -4.10183L6.73025 5.60567L16.6804 -4.27433Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter12_d_603_147)"></g>
            <g filter="url(#filter13_d_603_147)">
              <path
                d="M6.66956 5.5472L-3.45755 -4.1604L-13.4078 5.7197L-3.28073 15.4273L6.66956 5.5472Z"
                fill="#1BB3E0"
                fillOpacity="0.6"
              />
            </g>
            <g filter="url(#filter14_d_603_147)">
              <path
                d="M36.7586 -4.32927L26.6315 -14.0369L16.6813 -4.15676L26.8084 5.55083L36.7586 -4.32927Z"
                fill="#1BB3E0"
              />
            </g>
            <g filter="url(#filter15_d_603_147)"></g>
            <g filter="url(#filter16_d_603_147)"></g>
            <g filter="url(#filter17_d_603_147)">
              <path
                d="M26.7476 5.49217L16.6206 -4.21533L6.67029 5.66467L16.7974 15.3723L26.7476 5.49217Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter18_d_603_147)">
              <path
                d="M16.7367 15.3137L6.60959 5.6062L-3.3407 15.4863L6.7864 25.1938L16.7367 15.3137Z"
                fill="#1BB3E0"
                fillOpacity="0.6"
              />
            </g>
            <g filter="url(#filter19_d_603_147)">
              <path
                d="M46.8257 5.43758L36.6986 -4.27002L26.7484 5.61008L36.8755 15.3177L46.8257 5.43758Z"
                fill="#1BB3E0"
              />
            </g>
            <g filter="url(#filter20_d_603_147)">
              <path
                d="M36.8147 15.2591L26.6876 5.55151L16.7374 15.4316L26.8645 25.1392L36.8147 15.2591Z"
                fill="#1BB3E0"
                fillOpacity="0.8"
              />
            </g>
            <g filter="url(#filter21_d_603_147)">
              <path
                d="M56.8927 15.2043L46.7656 5.49683L36.8154 15.3769L46.9425 25.0844L56.8927 15.2043Z"
                fill="#1BB3E0"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_603_147"
          x="-7.12903"
          y="25.0728"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_603_147"
          x="-27.3488"
          y="5.62378"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_603_147"
          x="-17.239"
          y="15.3481"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_603_147"
          x="12.9486"
          y="24.9341"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_603_147"
          x="-27.2065"
          y="25.2117"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_603_147"
          x="2.83875"
          y="15.2095"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_603_147"
          x="-7.27124"
          y="5.48486"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_603_147"
          x="22.9164"
          y="15.0706"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_603_147"
          x="12.8064"
          y="5.34619"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_603_147"
          x="32.884"
          y="5.20728"
          width="28.0781"
          height="27.5884"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_603_147"
          x="2.61426"
          y="-23.8035"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter11_d_603_147"
          x="-7.39685"
          y="-13.9819"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter12_d_603_147"
          x="-27.4187"
          y="5.66113"
          width="28.0774"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter13_d_603_147"
          x="-17.4078"
          y="-4.1604"
          width="28.0774"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter14_d_603_147"
          x="12.6813"
          y="-14.0369"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter15_d_603_147"
          x="-17.4639"
          y="-23.7488"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter16_d_603_147"
          x="-27.4749"
          y="-13.9272"
          width="28.0774"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter17_d_603_147"
          x="2.67029"
          y="-4.21533"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter18_d_603_147"
          x="-7.3407"
          y="5.6062"
          width="28.0774"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter19_d_603_147"
          x="22.7484"
          y="-4.27002"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter20_d_603_147"
          x="12.7374"
          y="5.55151"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <filter
          id="filter21_d_603_147"
          x="32.8154"
          y="5.49683"
          width="28.0773"
          height="27.5876"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_603_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_603_147"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_603_147">
          <rect width="369" height="31" fill="white" />
        </clipPath>
        <clipPath id="clip1_603_147">
          <rect
            width="101.475"
            height="113"
            fill="white"
            transform="translate(-44.075 -41)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LogoIcon
