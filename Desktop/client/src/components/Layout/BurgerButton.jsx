import './burgerButton.css'
export const BurgerButton = ({ collapseSidebar }) => {

    const onHandleCollapseSidebar = () => {
        collapseSidebar();
    }

    return(

        <label htmlFor="burger" className="burger" >
            <input id="burger" type="checkbox" onClick={ onHandleCollapseSidebar } />
                <span></span>
                <span></span>
                <span></span>
        </label>

    )

}