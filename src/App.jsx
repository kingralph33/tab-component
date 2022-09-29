import TabSelect from './components/TabSelect';
import TabContentDisplay from './components/TabContentDisplay';

function App() {
	return (
		<div className='App'>
			<div className='container w-1/2 mx-auto my-10 border-solid border-4 border-gray-500 p-10'>
				<div className='flex mb-4'>
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
