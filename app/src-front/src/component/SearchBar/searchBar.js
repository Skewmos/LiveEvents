import "./searchBar.scss";
import { useForm } from "react-hook-form";

const  SearchBar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return(
            <div className="row">
                <div className="col-md-12">
                    <form action="" className="form-row">
                        <div className="form-group space">
                            <label htmlFor="scene">Par scène</label>
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option defaultValue>Choisir...</option>
                                <option value="1">Zone A</option>
                                <option value="2">Zone B</option>
                                <option value="3">Zone C</option>
                            </select>
                        </div>

                        <div className="form-group space">
                            <label htmlFor="scene">Par date</label>
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option defaultValue>Choisir...</option>
                                <option value="1">9 août 2021</option>
                                <option value="2">10 août 2021</option>
                                <option value="3">11 août 2021</option>
                            </select>
                        </div>

                        <div className="form-group space">
                            <label htmlFor="scene">Par heure</label>
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option defaultValue>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>



                        <a href="">Appliquer les filtres</a>
                    </form>
                </div>
            </div>
    )
}

export default SearchBar