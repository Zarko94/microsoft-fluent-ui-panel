import { useState,useEffect, } from 'react'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { GridComponent,Page,Inject,Filter } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { CustomPanel } from './components/Panel';

const api=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})



import './App.css'


function App() {
 
  

  const [isOpen, setIsOpen] = useState(false);
  const [panelData,setPanelData]=useState({});
  
const [data,setData]=useState([])
useEffect(()=>{
  const fetchPosts=async()=>{
    try {
      const response=await api.get('/posts')
      setData(response.data)
    } catch(err){
      console.log(err)
    }
  }
  fetchPosts()
},[])

  


  return (
    <div style={{margin:'10%', marginTop:'5%'}}>
    
       <GridComponent
       allowSelection={true}
       selectionSettings={{type: "Single", mode: "Row"}}rowSelected={(row) => {
       const rowData=row.data;

        setPanelData(rowData);


        setIsOpen(true);
       
       
       }}
             dataSource={data}
       allowFiltering={true}
        allowPaging={true}
         pageSettings={{pageSize:10} }>
      <Inject services={[Page,Filter]} />
      </GridComponent>
      {/* <PanelBasicExample data={panelData} isOpen={isOpen} setIsOpen={closePanelHanlder}/> */}
      <CustomPanel isOpen={isOpen} setIsOpen={setIsOpen} data={panelData} />
      
      
      
    </div>
  )
}

export default App
