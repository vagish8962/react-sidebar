import { useState } from 'react';
import Folder from './components/folder';
import explorer from './data';
import traverseTree from './utils/traverseTree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = traverseTree();

  const handleInsertNode = (inputVal, id, isFolder) => {
    const updatedExplorerData = insertNode(explorerData, inputVal, id, isFolder);
    setExplorerData(updatedExplorerData)
  }

  return (
    <div className="App">
      <Folder explorer={explorerData}  handleInsertNode={handleInsertNode}/>
    </div>
  );
}

export default App;
