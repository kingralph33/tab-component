import TabSelect from './components/tabSelect';
import TabContentDisplay from './components/TabContentDisplay';

function App() {
	return (
		<div className='App'>
			<div className='container mx-auto'>
				<div className='flex'>
					<TabSelect />
				</div>
				<div>
					<TabContentDisplay />
				</div>
			</div>
		</div>
	);
}

export default App;
