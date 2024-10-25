function App() {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">React-Redux Counter</h2>
        <div className="text-4xl font-semibold text-blue-600 mb-6">0</div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Increment
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;