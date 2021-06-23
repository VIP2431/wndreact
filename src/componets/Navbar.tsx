

const Navbar = () => {
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

export default Navbar; // className="container"

//              width: 150px; /* устанавливаем ширину элемента */
//              height: 150px; /* устанавливаем высоту элемента */
//              padding: 10px; /* устанавливаем внутренние отступы элемента */className="grid-item color1"
//              border: 5px; /* устанавливаем границы элемента */
