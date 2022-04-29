import { Handle, Position } from 'react-flow-renderer';

const handleStyle = {
    backgroundColor: 'red'
}

export const InletNodeType = () => {
    return (
        <>
          <Handle type="source" position={Position.Top} style={handleStyle}/>
        </>
      );
}

export const OutletNodeType = () => {
    return (
        <>
          <Handle type="target" position={Position.Bottom} style={handleStyle}/>
        </>
      );
}