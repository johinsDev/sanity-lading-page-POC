import * as React from 'react'

function BgWhite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={292.979}
      height={343.285}
      viewBox="0 0 292.979 343.285"
      {...props}
    >
      <g data-name="Group 30" fill="#fff">
        <path
          data-name="Path 11"
          d="M0 83.18v46.145l57.121 36.078.478-46.328z"
        />
        <path
          data-name="Path 12"
          d="M126.794 79.731L233.109 141.9v48.662l-106.315-63.957z"
        />
        <path
          data-name="Path 13"
          d="M0 159.542v46.145l57.121 36.078.478-46.329z"
        />
        <path
          data-name="Path 14"
          d="M126.794 156.093l106.315 62.169v48.662l-106.315-63.957z"
        />
        <path
          data-name="Path 15"
          d="M0 235.903v46.145l57.121 36.078.478-46.328z"
        />
        <path
          data-name="Path 16"
          d="M184.067 44.764L261.839.001l2.255 45.842-40.776 21.088z"
        />
        <path
          data-name="Path 17"
          d="M57.599 119.074l69.194-39.344v46.874l-69.735 38.8z"
        />
        <path
          data-name="Path 18"
          d="M233.108 141.901v48.662l59.871-36.634v-49.938z"
        />
        <path
          data-name="Path 19"
          d="M57.599 195.437l69.194-39.344v46.874l-69.735 38.8z"
        />
        <path
          data-name="Path 20"
          d="M233.108 218.262v48.662l59.871-36.633v-49.938z"
        />
        <path
          data-name="Path 21"
          d="M57.599 271.798l69.194-39.344v46.874l-69.735 38.8z"
        />
        <path
          data-name="Path 22"
          d="M233.108 294.624v48.662l59.871-36.634v-49.938z"
        />
      </g>
    </svg>
  )
}

const MemoBgWhite = React.memo(BgWhite)
export default MemoBgWhite
