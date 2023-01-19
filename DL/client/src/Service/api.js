import axios from 'axios';

const usersUrl = 'http://localhost:5000';

export const addDlDetails = async(user) => {
   
        // return
        //  try {
        return    await axios.post(`${usersUrl}/scrub`, user)
            // console.log(res)
        //  } catch (error) {
            // console.log(error.response.data)
        //  }
         

        


        
    
}