import axios from "axios";
import { useState } from "react";

const diseases = {
  0: {
    prevention: "Plant strawberries in well-drained soil.",
    cure: "Remove all infected leaves or plants.",
    name:"Strawberry Leaf Scorch"
  },
  1: {
    prevention: "Plant tomatoes in well-drained soil.",
    cure: "Remove all infected leaves or plants.",
    name:"Tomato Leaf Mold",
  },
  2: {
    prevention: "Plant tomatoes from certified disease-free seeds.",
    cure: "There is no cure for tomato mosaic virus.",
    name:"Tomato Mosaic Virus"
  },
  3: {
    prevention: "Rotate corn crops every year.",
    cure: "Remove all infected leaves or plants.",
    name:"Corn Common Rust",
  },
  4: {
    prevention: "Plant potatoes in well-drained soil.",
    cure: "Remove all infected leaves or plants.",
    name:"Potato Early Blight",
  },
};

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

 

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/https://farmer-api.onrender.com/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Requested-With": "XMLHttpRequest"
          },
        }
      );
      setResponse(response.data);
      const disease = response.data.prediction;
      await setPrevention(diseases[disease].prevention);
      await setCure(diseases[disease].cure);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
          <div id="find" className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">

          <div className="bg-white overflow-hidden  shadow sm:rounded-lg">
            <div className="p-6  bg-white border-b border-gray-200 flex justify-center" >

              
           

         
          

          

         
     {!response && ( <form onSubmit={handleSubmit}>
        {/* <label htmlFor="file">Choose an image:</label> */}
        <input type="file" id="file" onChange={handleFileInputChange} />
        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        <br/>
      </form>)}
      {response && (
        

          <div className="flex   justify-around  mt-10 " >
            
{/* <div className="relative right-12">
<ul>{diseases[response.class].prevention}</ul>
</div>
<div className="relative left-12">
<ul>{diseases[response.class].cure}</ul>
</div> */}
<h2>Disease:</h2>
  <h3 className="relative top-1">{diseases[response.class].name}</h3>

          </div>
          
      )}
      {/* <div>
        <h2>Prevention:</h2>
        <p>{prevention}</p>
      </div>
      <div>
        <h2>Cure:</h2>
        <p>{cure}</p>
      </div> */}
    </div>
    </div>
          </div>
  );
};

export default ImageUploadForm;
