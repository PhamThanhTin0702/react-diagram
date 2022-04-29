import logo from './logo.svg';
import './App.css';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { nodes as data } from './nodes';
import { InletNodeType, OutletNodeType } from './node_types';
import { filterClass, filterInletsOfNodes, filterNodes, filterOutletsOfNodes, sortPositionOfNodes } from './helper/filter_node';
import { buildDataNode } from './helper/build_data_node';

const nodeTypes = {
  'inlet': InletNodeType,
  'outlet': OutletNodeType
}

const nodes = filterNodes(data, 'nodes')
const edges = filterNodes(data, 'edges')

const pumpNodes = filterClass(nodes, 'Pump')
const pipeNodes = filterClass(nodes, 'Pipe')
const connectorNodes = filterClass(nodes, 'Connector')

const loadProfileNodes = filterClass(nodes, 'LoadProfile')
const chillerNodes = filterClass(nodes, 'Chiller')
const coolingTowerNodes = filterClass(nodes, 'CoolingTower')

const parentNodes = [...loadProfileNodes, ...chillerNodes, ...coolingTowerNodes]
const parentNodesPos = parentNodes.map((node, key) => (buildDataNode(node, key)))
const nodesPos = sortPositionOfNodes(parentNodesPos) //Store node's position

const inletNodes = filterInletsOfNodes(parentNodes, nodesPos)
const outletNodes = filterOutletsOfNodes(parentNodes, nodesPos)

function App() {
  return (
    <ReactFlow
      nodes={[...parentNodesPos, ...inletNodes, ...outletNodes]}
      nodeTypes={nodeTypes}
      // edges={edges}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
      // onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default App;
