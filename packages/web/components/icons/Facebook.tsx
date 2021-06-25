import * as React from 'react'

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.887}
      height={17.808}
      viewBox="0 0 17.887 17.808"
      {...props}
    >
      <g data-name="Group 118">
        <g data-name="Group 117">
          <g data-name="Group 116">
            <path
              data-name="Path 94"
              d="M10.256 17.808h-.239v-7.013h2.163l.314-2.488h-2.427a.407.407 0 01-.042-.106c0-.49-.011-.98-.007-1.47.007-.9.352-1.238 1.262-1.245h1.264v-2.3h-2.165a2.479 2.479 0 00-.47.062 2.872 2.872 0 00-2.432 2.9c-.014.71 0 1.421 0 2.179H5.338v2.491h2.111v6.908a1.537 1.537 0 01-.218-.013 8.73 8.73 0 01-6.5-5.28 19.251 19.251 0 01-.73-2.656V8.108a1 1 0 00.06-.182A8.776 8.776 0 016.195.434 15.355 15.355 0 018.11-.001h1.67a1.513 1.513 0 00.219.065 8.691 8.691 0 017.152 5.357 17.841 17.841 0 01.737 2.687v1.669a.966.966 0 00-.062.181 8.8 8.8 0 01-4.625 6.844 9.879 9.879 0 01-2.945 1.006z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

const MemoFacebook = React.memo(Facebook)
export default MemoFacebook
