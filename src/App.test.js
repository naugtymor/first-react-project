import { createRoot } from 'react-dom/client';
import FullApp from "./App";

test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<FullApp tab="home" />);
    root.unmount();
});
