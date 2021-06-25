import * as React from 'react'

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.632}
      height={17.632}
      viewBox="0 0 17.632 17.632"
      {...props}
    >
      <g data-name="Group 115">
        <g data-name="Group 114">
          <g data-name="Group 113">
            <path
              data-name="Path 91"
              d="M8.792 17.631H5.259a5.176 5.176 0 01-5.254-5.233q-.009-3.582 0-7.163A5.139 5.139 0 014.364.068a5.32 5.32 0 01.873-.063q3.582-.007 7.163 0a5.137 5.137 0 015.166 4.36 5.491 5.491 0 01.064.9q.008 3.557 0 7.114a5.132 5.132 0 01-4.336 5.185 5.583 5.583 0 01-.921.069c-1.194.002-2.388-.002-3.581-.002zM4.415 8.798a4.4 4.4 0 104.413-4.383 4.4 4.4 0 00-4.413 4.383zm10.274-5.123a.734.734 0 00-1.468-.01.734.734 0 101.468.01z"
            />
            <path
              data-name="Path 92"
              d="M8.83 5.884a2.932 2.932 0 102.918 2.957A2.926 2.926 0 008.83 5.884z"
            />
            <path
              data-name="Path 93"
              d="M8.83 5.884A2.932 2.932 0 115.884 8.79 2.923 2.923 0 018.83 5.884z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

const MemoInstagram = React.memo(Instagram)
export default MemoInstagram
