import {NodeData} from '../../models/interfaces/navigation/node-data';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {StringTree} from '../../models/classes/navigation/string-tree';
import {convertStringNodeToMenuItem} from './convert-string-node-to-menu-item';


export function convertNodeDataToMenuItem(data: NodeData<string>): MenuItem {
    const tree = StringTree.createTreeFromJson(data);
    return convertStringNodeToMenuItem(tree.rootNode);
}


