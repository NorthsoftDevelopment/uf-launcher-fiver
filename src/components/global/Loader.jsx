export const Loader = ({reason}) => {
  return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h1>{reason}</h1>
      </div>
  )
}

export const LoaderMin = ({reason}) => {
  return (
      <div className="loading-screen-min">
        <div className="loader"></div>
        <h1>{reason}</h1>
      </div>
  )
}