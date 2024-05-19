import type { ComponentProps, FC } from 'react'

export interface SVGProps extends Omit<ComponentProps<'svg'>, 'viewBox'> {}

export const JavascriptSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
      <path
        fill="#323330"
        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
      ></path>
    </svg>
  )
}

export const TypescriptSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        data-name="original" fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  )
}

export const ReactSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4"></circle>
        <path
          d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
        ></path>
      </g>
    </svg>
  )
}

export const GopherSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <defs>
        <path id="go-original-a" d="M18.8 1h90.5v126H18.8z"></path>
      </defs>
      <clipPath id="go-original-b">
        <use xlinkHref="#go-original-a" overflow="visible"></use>
      </clipPath>
      <path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9" clipPath="url(#go-original-b)"></path>
      <path
        d="M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M21.1 68.7c.5-.2 1.1-.3 1.4-.8" clipPath="url(#go-original-b)"></path>
      <path d="M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z" clipPath="url(#go-original-b)"></path>
      <path d="M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5" d="M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z" clipPath="url(#go-original-b)"></path>
      <path d="M97.5 25.3L89.2 11l.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3" clipPath="url(#go-original-b)"></path>
      <path
        d="M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zm9.1 5.5c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6" clipPath="url(#go-original-b)"></path>
      <path
        d="M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zm.2.7c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zm64.9-1.8c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9" clipPath="url(#go-original-b)"></path>
      <path
        d="M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zM99.8 63c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8V68l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#C6B198" d="M107.1 68.2c-.5-.2-1.1-.3-1.4-.8" clipPath="url(#go-original-b)"></path>
      <path d="M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#6AD7E5"
            d="M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1C34.5 8.5 48.1 5.1 62.8 4"
            clipPath="url(#go-original-b)"></path>
      <path
        d="M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6C76 3.6 89.3 5.5 96 18.8c4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zM62.8 4.3c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1C92.7 13 88.2 9 82 6.7c-6.4-2.1-13.6-2.4-19.2-2.4z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9" clipPath="url(#go-original-b)"></path>
      <path
        d="M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2" clipPath="url(#go-original-b)"></path>
      <path
        d="M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5C39.2 30 44 32 48 32c3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z" clipPath="url(#go-original-b)"></path>
      <path
        d="M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z"
        clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z" clipPath="url(#go-original-b)"></path>
      <path d="M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z"
            clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#F6D2A2" d="M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z" clipPath="url(#go-original-b)"></path>
      <path fill="#231F20"
            d="M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zM64.1 38c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z"
            clipPath="url(#go-original-b)"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4" clipPath="url(#go-original-b)"></path>
    </svg>
  )
}

export const GitSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path
        fill="#F34F29"
        d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
      ></path>
    </svg>
  )
}

export const DockerSVG: FC<SVGProps> = (props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54"
            d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"></path>
      <path fill="#00AADA"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"></path>
      <path fill="#28B8EB"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"></path>
      <path fill="#028BB8"
            d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"></path>
      <path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3"
            d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE"
            d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"></path>
      <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54"
            d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"></path>
      <path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"></path>
      <path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"></path>
    </svg>
  )
}
