import { Suspense, useState } from 'react'

import './App.css'
import ImageList from './components/ImageList'
import Header from './components/Header'
import Loader from './components/Loader'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div>
      <Header
        onSearch={(searchTerm: string) => {
          setQuery(searchTerm)
        }}
      />

      <main className="container mx-auto mt-32 px-4">
        <Suspense fallback={<Loader />}>
          <ImageList query={query} />
        </Suspense>
      </main>
    </div>
  )
}

export default App
