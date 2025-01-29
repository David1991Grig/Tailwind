const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)} className={'bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white'}>{itemTitle}</li>
    );
};

export default NavItem;