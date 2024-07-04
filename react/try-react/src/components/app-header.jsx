const AppHeader = (props) => {
  const { name, theme } = props
  return (
    <div className="app-header">
      <h1 className="title">{name}</h1>
      <h2 className="day">{theme}</h2>
    </div>
  )
}

export default AppHeader