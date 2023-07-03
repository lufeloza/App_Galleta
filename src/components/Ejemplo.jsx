// const [country, setCountry] = useState({})
//   const [isLoading, setIsLoading] = useState(true)
  
//   useEffect(() =>{
//     axios
//       .get('https://restcountries.com/v3.1/name/colombia')
//       .then(resp => {
//         setCountry(resp.data[0])
//         setIsLoading(false)
//       })
      
//       .catch( error => console.error(error))

//   }, [])
  
//   return (
//     <>
//       {/* true $$ JSX (truthy) */}

//       {isLoading && <Loader></Loader>}
//       <section className='country-wrapper'>
//         <h1>{country.name?.common}</h1>
//         <img src={country.flags?.png} alt="" />
//       </section>      
//     </>
//   );
// }
// export default App;