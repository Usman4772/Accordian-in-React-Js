import React, {  useState } from 'react'
import "../accordian.css"
import { data } from '../data'
function Accordian() {
    const [selected,getSelected]=useState(null)
    const [isMulitple,setIsMultiple]=useState(false)
    const [multiple,setMultiple]=useState([])
    function handleSingleSelection(id){

        getSelected(selected ===id?null:id)//if we again select the same thing then set it to null otherwise set it to id
    }
    function hanldMultipleSelections(id){
    const copyMultiple=[...multiple]
    const index=copyMultiple.indexOf(id)
  
    if(copyMultiple.indexOf(id)===-1){
        //it returns =-1 if item not found ..so if it is not in array then add it ..
        copyMultiple.push(id)
       
    }else{
        // else remove it 
        copyMultiple.splice(index,1)
    }
    setMultiple(copyMultiple)

    }
    
  return (
    <div className='wrapper'>
    <button className='multiple-selection' onClick={()=>setIsMultiple(prev=>!prev)}>Enable Multiple Selection </button>
    {isMulitple?<span>Multiple Selection Enabled</span>:null}
    {data && data.length>1 ?
data.map(item=>{
return <div className='accordian'>
<div className='question' onClick={isMulitple?()=>hanldMultipleSelections(item.id):()=>handleSingleSelection(item.id)}>{/*event bubbling  */}
<h3>{item.question}</h3>
<span>{isMulitple?multiple.indexOf(item.id)!==-1?"-":"+":selected===item.id ?"-":"+"}</span>
</div>
{isMulitple?multiple.indexOf(item.id)!==-1 &&<div className='answer'>{item.answer}</div>:selected === item.id && <div className='answer'>{item.answer}</div> }


</div>
})
 :<div>No data found</div>}
    
    </div>
  )
}

export default Accordian