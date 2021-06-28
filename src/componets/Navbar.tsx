
export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper brown">
                <a href="../" className="brand-logo">Смета</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="../">Объекты</a></li>
                    <li><a href="../">Справочники</a></li>
                    <li><a href="../">Поиск</a></li>
                </ul>
            </div>
        </nav>
    );
}
