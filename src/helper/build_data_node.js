import { distance_node_inlet, distance_node_outlet, start_position_x, start_position_y } from "../consts/position";

export const buildDataNode = (node, dis) => ({id: node.data.id, data: {label: node.data.label}, position: {x: start_position_x * dis, y: start_position_y}})

export const buildInletNode = (id, parentPosition, node, alpha) => ({id: `inlet_${node.data.id}_${alpha}`, position: {x: parentPosition.x + ((50 * alpha)), y: parentPosition.y - distance_node_inlet}, type: "inlet"})

export const buildOutletNode = (id, parentPosition, node, alpha) => ({id: `outlet_${node.data.id}_${alpha}`, position: {x: parentPosition.x + ((50 * alpha)), y: parentPosition.y + distance_node_outlet}, type: "inlet"})