import { useEffect, useState } from "react";
import SinglePhone from "./SinglePhone";

const Mobile = () => {
  const [allPhones, setAllPhones] = useState([])
  const [searchText, setSearchText] = useState('')

  // onChange is so important
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  // so important depend on searchText and it re fetch
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText || 'iphone'}`)
      .then(res => res.json())
      .then(data => setAllPhones(data.data))
  }, [searchText])//depend on searchText it will re fetch


  return (
    <>
      <h1 className="text-center font-bold text-2xl my-2">{searchText || 'Iphone'} in stock : {allPhones.length}</h1>

      <div className="flex items-center justify-center gap-2">
        <input className="border px-2 py-1 rounded-md shadow-md shadow-gray-500 focus:outline-none placeholder:text-center" type="text" onChange={handleChange} placeholder="Search Mobile or Watch" />
      </div>

      <div className="w-[90%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
        {allPhones.length ?
          allPhones.map((phone, index) => <SinglePhone key={index} phone={phone} />) :
          <h1 className="text-center font-bold text-2xl">No Phones Found with name '{searchText}'</h1>
        }
      </div>
    </>
  )
}

export default Mobile