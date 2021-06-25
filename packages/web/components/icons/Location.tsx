import * as React from 'react'

function Location(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.153}
      height={16.6}
      viewBox="0 0 13.153 16.6"
      {...props}
    >
      <path
        data-name="Path 67"
        d="M6.593 16.6l-1.619-1.812-3.251-3.626a6.7 6.7 0 013.5-11.01 6.565 6.565 0 017.756 5.021 6.681 6.681 0 01-1.739 6.21c-1.518 1.664-3 3.363-4.495 5.046zm-.021-2.741c.156-.171.285-.311.411-.451 1.025-1.14 2.041-2.287 3.077-3.416a4.846 4.846 0 00-4.426-8.081 4.852 4.852 0 00-3.846 4.808 4.329 4.329 0 00.968 2.816c1.179 1.38 2.4 2.72 3.61 4.077.065.073.126.151.206.247z"
      />
      <path
        data-name="Path 68"
        d="M6.591 4.43a2.251 2.251 0 11-2.229 2.253A2.228 2.228 0 016.591 4.43z"
      />
    </svg>
  )
}

const MemoLocation = React.memo(Location)
export default MemoLocation
