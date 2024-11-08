function Modal({
  open = false,
  onClose = () => {},
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactElement | undefined
}) {
  return (
    <div className={open ? 'block' : 'hidden'}>
      <div className="fixed inset-0 z-50 flex size-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-0">
        <div className="relative max-h-full w-full p-4">
          <div className="relative rounded-lg border border-gray-200 bg-gray-50 shadow-lg">
            <div className="absolute right-0 flex items-center justify-between rounded-t p-4 md:p-5">
              <button
                type="button"
                className="z-50 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-600 hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="size-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
