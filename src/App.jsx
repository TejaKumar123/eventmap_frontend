import IndexRoute from "./routes/indexRoute"
import RefreshHandler from "./components/private/refreshHandler"

const App = () => {
	return (
		<>
			<RefreshHandler />
			<IndexRoute />
		</>
	)
}

export default App