import React from 'react'


function Learn(props) {
   console.log(props);
   const renderlist = props.Contact.map((Contacts)=>{
   return(

    <>
      <div className='flex justify-center'>
        <ul>
          <li className='bg-slate-600'>{Contacts.name}</li>
          <li>{Contacts.id}</li>
          <li>{Contacts.email}</li>
        </ul>

      </div>
    </>
   );

   }  )
  return (
    <div className='mt-[150px] border-8 border-indigo-600'>
        {renderlist}
    </div>
  )
}

export default Learn
   