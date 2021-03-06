import * as React from 'react'

function Dollar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.79 42.981"
      {...props}
    >
      <g data-name="Group 35">
        <path
          data-name="Path 30"
          d="M12.754 42.981v-3.784A22.521 22.521 0 010 33.545l3.785-4.511a17.979 17.979 0 008.969 4.511V23.487q-5.859-1.4-8.581-3.681T1.452 13.04a9.469 9.469 0 013.136-7.337 12.7 12.7 0 018.166-3.11V0h3.319v2.644a21.68 21.68 0 0110.784 3.889l-3.37 4.77a16.709 16.709 0 00-7.414-3.007v9.747h.155q5.963 1.4 8.762 3.785t2.8 6.921a9.417 9.417 0 01-3.214 7.388 13.37 13.37 0 01-8.5 3.111v3.733zM9.099 9.514a3.714 3.714 0 00-1.322 2.9 3.656 3.656 0 001.037 2.747 10.487 10.487 0 003.94 1.945v-8.97a6.213 6.213 0 00-3.655 1.378zm10.914 22.735a4 4 0 00.311-5.884 11.288 11.288 0 00-4.251-2v9.333a7.253 7.253 0 003.94-1.449z"
          fill="#e0cac1"
        />
      </g>
    </svg>
  )
}

const MemoDollar = React.memo(Dollar)
export default MemoDollar
