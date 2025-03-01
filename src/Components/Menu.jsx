import axios from "axios"
import { useEffect , useState} from "react"
const Menu = () => {

    const [categories,setCategories] = useState([]) ;


    useEffect(() => {


        const fetching_categories = async ()=> {
            
            try {

                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php") ;
                console.log(response.data) ;
                setCategories(response.data.categories) ;
                
            } catch (error) {
                console.log(error)
                return error ;
            }
        }

        fetching_categories()
     
    }, [])
    
    // console.log("updated state : ",categories)
    
    


    return(

        <div className="flex flex-col    ">

            <div className="ml-4">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl ">Explore Now </h1>
                <p className="text-orange-500  mt-3">Choose from a diverse menu of dishes our missions is to satisfy our clients
                    and enhnace yours dining experience . One delecious meal at a time
                </p>
            </div>

                <div className=" flex sm:gap-6 sm:p-6 shrink-0 
                 gap-8 overflow-x-auto p-1 mt-6"  id="menu">

                
                   {categories.map((i) => (
                        <div key={i.idCategory}>

                             <div
                                

                                className="bg-white  cursor-pointer 
                                hover:border-orange-600 border-5 rounded-full w-20 h-20 sm:w-30 sm:h-30 shrink-0"
                                 style={{
                                     backgroundImage :`url(${i.strCategoryThumb})`,
                                     backgroundSize: "cover",       
                                     backgroundRepeat: "no-repeat",

                                 }}>

                            </div>
                            <div className="text-white">
                                <h1 className="text-center mt-3">{i.strCategory}</h1>
                            </div>
                       </div>
                       
                   ))}
                </div>
           
        </div>
    )
}

export default Menu