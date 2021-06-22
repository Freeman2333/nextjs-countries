import Link from "next/link";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./CountriesTable.module.css";

const CountriesTable = ({countries}) => {
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>
        <button className={styles.heading_name} onClick={()=>{}}><div>Name</div></button>
        <button className={styles.heading_population} onClick={()=>{}}><div>Population</div></button>
        <button className={styles.heading_area} onClick={()=>{}}><div>Area</div></button>
        <button className={styles.heading_gini} onClick={()=>{}}><div>Gini</div></button>
      </div>
      {countries.map(country=>(
        <Link href={`/country/${country.alpha3Code}`} key={country.name}>
          <div className={styles.row}>
            <div className={styles.flag}>
              <img src={country.flag} alt={country.name} />
            </div>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
            <div className={styles.area}>{country.area || 0}</div>
            <div className={styles.gini}>{country.gini || 0} %</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CountriesTable
