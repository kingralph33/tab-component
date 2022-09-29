import TabSelect from './components/TabSelect';
import TabContentDisplay from './components/TabContentDisplay';
import CreateTabButton from './components/CreateTabButton';

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
				<div className='mt-4 text-center'>
					<CreateTabButton />
				</div>
			</div>
		</div>
	);
}

export default App;
