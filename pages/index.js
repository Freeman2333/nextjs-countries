import Head from 'next/head'
import Layout from "../components/Layout/Layout";
import styles from '../styles/Home.module.css'
import CountriesTable from '../components/CountriesTable/CountriesTable'

export default function Home({countries}) {

  const filteredCountries = countries
  return <Layout>
    <div className={styles.inputContainer}>
      <div className={styles.counts}>Found {countries.length} countries</div>
    </div>
    <CountriesTable countries={filteredCountries}/>
  </Layout>
}

export const getStaticProps = async ()=>{
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props:{
      countries,
    }
  }
}
