import { useState } from 'react'

const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('')

  function search(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    onSearch(query)
  }

  function onInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event?.target.value)
  }

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-blue-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="mx-auto w-full items-center justify-between">
          <form className="mx-auto max-w-md">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="size-4 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                name="search"
                className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-4 ps-10 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search photos and illustrations"
                required
                value={query}
                onInput={onInput}
              />
              <button
                type="submit"
                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
                onClick={search}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header
