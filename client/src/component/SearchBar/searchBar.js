import "../SearchBar/searchBar.scss";
import { useForm } from "react-hook-form";

const  SearchBar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return(
        <div className="searchBar">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-groupe">
                <label>Par scène</label>
                <select name="scene" ref={register} defaultValue="ZoneA">
                    <option value="Zone A">Zone A</option>
                    <option value="Zone B">Zone B</option>
                    <option value="Zone C">Zone C</option>
                </select>
            </div>
            <div className="form-groupe">
                <label>Par date</label>
                <select name="date" ref={register} defaultValue="9 août 2021">
                    <option value="9 août 2021">9 août 2021</option>
                    <option value="10 août 2021">10 août 2021</option>
                </select>
            </div>
            <div className="form-groupe">
                <label>Par heure</label>
                <div className="select-custom">
                    <div className="arrow-left"></div>
                        <select name="heure" ref={register} defaultValue="10:00 - 11:00">
                            <option >10:00 - 11:00</option>
                            <option >11:00 - 12:00</option>
                        </select>
                    <div className="arrow-right"></div>
                </div>
            </div>
            <a href="#">Appliquer les filtres</a>
            </form>
        </div>
    )
}

export default SearchBar