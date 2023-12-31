'use client';
import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

const useIdleTimeout = ({
	onIdle,
	idleTime = 1,
}: {
	onIdle: VoidFunction;
	idleTime: number;
}) => {
	const idleTimeout = 1000 * idleTime;
	const [isIdle, setIdle] = useState(false);
	const handleIdle = () => {};
	const idleTimer = useIdleTimer({
		timeout: idleTimeout,
		promptTimeout: idleTimeout / 2,
		onPrompt: onIdle,
		onIdle: onIdle,
		debounce: 500,
	});
	return {
		isIdle,
		setIdle,
		idleTimer,
	};
};
export default useIdleTimeout;
