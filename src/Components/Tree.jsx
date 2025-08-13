// tree vieew, dynamic navigation menu,
//  recursive menu , some times they will give a nested
// data structure tell to implement it ,

import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-contianer">
      <MenuList list={menus } />
    </div>
  );
}
