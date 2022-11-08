import { useEffect } from 'react';

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title}- Photography & Videography Services`;
	}, [title]);
};

export default useTitle;
