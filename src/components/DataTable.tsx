import  { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "Car ID", width: 90},
    { field: 'first', headerName: "First Name", flex: 1},
    { field: 'last', headerName: "Last Name", flex: 1},
    { field: 'email', headerName: "Email", flex: 1},
    { field: 'phone_number', headerName: "Phone Number", flex: 1},
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-800 text-white rounded m-3 hover:underline hover:text-teal-500"
                    onClick={() => handleOpen()}
                >
                    Add To Inventory    <i className="fa-solid fa-plus"></i>
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-slate-800 text-white rounded m-3 hover:underline hover:text-green-700" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-800 text-white rounded m-3 hover:underline hover:text-red-700" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-800 text-white my-2 rounded">Your Inventory</h2>
            <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true} 
            // onSelectionModelChange={ (item:any) => {
            //     setSelectionModel(item)
            // }}
            />
        </div>
    </>
  )
}

export default DataTable
