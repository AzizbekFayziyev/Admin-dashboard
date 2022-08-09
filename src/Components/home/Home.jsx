import React, { useEffect, useState } from 'react'
import LineChart from './Chart'

export default function Home() {
  const randomNum = (e) => Math.floor(Math.random() * e);

  // users
  const [userArr, setUserArr] = useState([]);
  const userUrl = "https://jsonplaceholder.typicode.com/users";

  async function users() {
    const response = await fetch(userUrl);
    const json = await response.json();
    setUserArr(json)
  }

  // product
  const [productArr, seProductArr] = useState([]);
  const productUrl = "https://jsonplaceholder.typicode.com/comments";

  async function products() {
    const response = await fetch(productUrl);
    const json = await response.json();
    seProductArr(json)
  }

  // fetching

  useEffect(() => {
    users();
    products();
  }, [])

  return (
    <section id="home">
      <LineChart />

      <div className="table-cnt row">
        <div className="tables col-lg-6 col-12">
          <h1 data-aos="zoom-out-down" className="title">Lasted customers</h1>
          <div className="table__cards">
            {userArr.map((e, id) => (
              <div data-aos="flip-up" key={id} className="table__card">
                <div className="table__text">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={`User: ${e.id}`} />
                  <h3>{e.name} <br /> <p>{e.email}</p></h3>
                </div>

                <h3>{randomNum(300)}$</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="tables col-lg-6 col-12">
          <h1 data-aos="zoom-out-down" className="title">Top products</h1>
          <div className="table__cards">
            {productArr.slice(0, 10).map((e, id) => (
              <div data-aos="flip-up" key={id} className="table__card">
                <div className="table__text">
                  <h3>{e.name.slice(0, 10)}... <br /> <p>{e.email}</p></h3>
                </div>

                <h3>{randomNum(30)} sales</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="transcations">

        <div className="transcations__title">
          <h1 data-aos="zoom-out-down" className="title">Transcations</h1>
          <p>This is a list of lasted transcations</p>
        </div>


        <table data-aos="flip-up" className='table'>
          <thead>
            <tr>
              <th>TRANSCATION</th>
              <th className='noInMobile'>DATA</th>
              <th>ANMOUT</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Payment from <b>Bonnie Green</b></td>
              <td className='noInMobile'><span>Apr 23 ,2021</span></td>
              <td><b>$2300</b></td>
              <td className='text-success'>Completed</td>
            </tr>
            <tr>
              <td>Payment refund to <b>#00910</b></td>
              <td className='noInMobile'><span>Apr 23, 2021</span></td>
              <td><b>-$670</b></td>
              <td className='text-success'>Completed</td>
            </tr>
            <tr>
              <td>Payment failed from <b>#087651</b></td>
              <td className='noInMobile'><span>Apr 18, 2021</span></td>
              <td><b>$234</b></td>
              <td className='text-danger'>Cancelled</td>
            </tr>
            <tr>
              <td>Payment from <b>Bonnie Green</b></td>
              <td className='noInMobile'><span>Apr 15, 2021</span></td>
              <td><b>$5000</b></td>
              <td className='text-primary'>In progress</td>
            </tr>
            <tr>
              <td>Payment from <b>Jese Leos</b></td>
              <td className='noInMobile'><span>Apr 15, 2021</span></td>
              <td><b>$2300</b></td>
              <td className='text-primary'>In progress</td>
            </tr>
            <tr>
              <td>Payment refund to <b>#00910</b></td>
              <td className='noInMobile'><span>Apr 11, 2021</span></td>
              <td><b>-$670</b></td>
              <td className='text-success'>Completed</td>
            </tr>
          </tbody>
        </table>


      </div>
    </section>
  )
}
