import React from 'react';
import { useForm } from "react-hook-form";
import styles from  "./searchBar.scss";

const  SearchBar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return(
        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroupe}>
                <label>Par scène</label>
                <select name="scene" ref={register} defaultValue="ZoneA">
                    <option value="Zone A">Zone A</option>
                    <option value="Zone B">Zone B</option>
                    <option value="Zone C">Zone C</option>
                </select>
            </div>
            <div className={styles.formGroupe}>
                <label>Par date</label>
                <select name="date" ref={register} defaultValue="9 août 2021">
                    <option value="9 août 2021">9 août 2021</option>
                    <option value="10 août 2021">10 août 2021</option>
                </select>
            </div>
            <div className={styles.formGroupe}>
                <label>Par heure</label>
                <div className={styles.selectCustom}>
                        <select name="heure" ref={register} defaultValue="10:00 - 11:00">
                            <option >10:00 - 11:00</option>
                            <option >11:00 - 12:00</option>
                        </select>
                </div>
            </div>
            <a href="#">Appliquer les filtres</a>
            </form>
        </div>
    )
}

export default SearchBar