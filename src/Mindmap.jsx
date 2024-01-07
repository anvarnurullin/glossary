import { Link } from 'react-router-dom';
import ReactFlow, {
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import initialEdges from './data/edges';
import initialNodes from './data/nodes';


function Mindmap() {

  return (
    <div style={{ height: '100vh'}}>
      <Link to="/glossary">
        <button style={({width: '15vw', height: '7vh', cursor: 'pointer', position: 'absolute', zIndex: 1, margin: '1%', background: 'black', color: 'white', borderRadius: '0.5em'})}>Глоссарий</button>
      </Link>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        nodesConnectable={false}
        nodesDraggable={false}
        style={{ zIndex: 0 }}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Mindmap;
