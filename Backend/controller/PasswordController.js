import { supabase } from "../config/supabase.js";

export const createPassword = async(req,res) =>{
   try{
    const {website, username, password} = req.body
    const {data, error} = await supabase
    .from("password")
    .insert([{
      website, username, password
    }])

    res.send({
      success: true,
      website,
      username,
      member: "password Recived"
    })

   }catch(error){
    res.json({
      success: false,
      error: error
    })
   }
}


export const deletepassword = async (req,res)=>{

  try{
    const {id} = req.params
   const {data,error} = await supabase
  .from("password")
  .delete()
  .eq("id", id)

  res.send({
    message: `the password with id: ${id} deleted`
  })

  }catch(error){
    res.json({
      success: false,
      error: error
    })
  }

}

export const getpassword = async (req,res)=>{

  try{
   const {data,error} = await supabase
   .from("password")
   .select("*")

  res.send({
    message: data
  })

  }catch(error){
    res.json({
      success: false,
      error: error
    })
  }

}

export const updatepassword = async (req,res)=>{

  try{
    const {id} = req.params
   const {website,password,username} = req.body
   const {data, error} = await supabase
  .from("password")
  .update({website,password,username})
  .eq("id", id)

  res.send({
    message: `the password with id: ${id} updated`
  })

  }catch(error){
    res.json({
      success: false,
      error: error
    })
  }

}