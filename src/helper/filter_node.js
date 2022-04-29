import { buildInletNode, buildOutletNode } from "./build_data_node"

export const filterNodes = (data, group) => {
    return data.filter((node) => (node.group === group))
}

export const filterClass = (nodes, className) => {
    return nodes.filter(node => ( node.data.class.split(':')[0]) === className)
}

export const filterInletsOfNodes = (nodes, nodesPos) => (
    nodes.reduce((prev, curr) => {
        let nodePos = nodesPos[curr.data.id]
        return [...prev, ...curr.data.nodes.inlet.reduce((prevInl, currInl, indInl) => {
          return prevInl = [...prevInl, buildInletNode(currInl, nodePos, curr, indInl)]
        }, [])]
    }, [])
)

export const filterOutletsOfNodes = (nodes, nodesPos) => (
    nodes.reduce((prev, curr) => {
        let nodePos = nodesPos[curr.data.id]
        return [...prev, ...curr.data.nodes.outlet.reduce((prevOut, currOut, indOut) => {
          return prevOut = [...prevOut, buildOutletNode(currOut, nodePos, curr, indOut)]
        }, [])]
    }, [])
)

export const sortPositionOfNodes = (nodes) => (
    nodes.reduce((prev, curr) => {
        prev[curr.id] = curr.position
        return {...prev}
    }, {})
)