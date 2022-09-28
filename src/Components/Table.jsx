import React, { useEffect, useState } from 'react'
import '../Compo-css/Table.css';
// import Viewdata from './Viewdata';

const Table = () => {
    const [todoData, setTodoData] = useState([]);
    const [modelData, setModelData] = useState({
        id: '',
        title: '',
        userId: '',
    })
    
    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(resposne => resposne.json())
            .then(res => setTodoData(res))
    }

    useEffect(() => {
        getData();
    }, [])


   
   

  

    const showData = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(resposne => resposne.json())
            .then(res => setModelData(res))
    }
   
    return (
        <div>
            <div className="header">
                <h3 className="text-center">Todos</h3>
            </div>

            <div className="box-container">
                <div className="table-data">
                    <div className="table-header">
                        <h4>Todo's</h4>
                        <input type="search" className="searchbox" name="search" id="search" />
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Todo.id</th>
                                <th scope="col">Name</th>
                                <th scope="col">status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoData.map((titles, id) => {
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{titles.id}</th>
                                            <td>{titles.title}</td>
                                            <td>{titles.completed}</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary" onClick={(e) => showData(titles.id)}>view user</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>

                </div>




                <div className="view-data">
                    
                    <div>
                        <div className="card">
                            <h6>id:{modelData.id}</h6>
                            <h6>Title:{modelData.title}</h6>
                            <h6>user id:{modelData.userId} </h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table


