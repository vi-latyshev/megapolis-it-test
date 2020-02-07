import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import { history } from './constants';
import { Spinner } from './components';
import { NotesProvider } from './contexts';


export const App: React.FC = () => (
	<Router history={history}>
		<div className="page">
			<div className="wrapper">
				<NotesProvider>
					<Suspense fallback={<Spinner />}>
						<Switch>
		</div>
	</div>
						</Switch>
					</Suspense>
				</NotesProvider>
			</div>
		</div>
			</div>
		</div>
	</Router>
);