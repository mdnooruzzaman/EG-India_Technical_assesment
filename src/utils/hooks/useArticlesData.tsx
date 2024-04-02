import { createContext, useContext, useEffect, useState } from "react";
import { getArticlesDetails, getArticlesList } from "../controllers/articles";
import { DetailsOfArticleI, ListOfArticlesI } from "../constant/interface";

interface ProvideArticlesDataI {
    children: React.ReactNode;
  }

const articleContext = createContext<any>(null)

export const useArticlesData = () => useContext(articleContext)

const HandleArticlesData =  () => {
    const [listOfArticles , setListOfArticles] = useState<ListOfArticlesI[]>([])
    const [detailsOfArticles , setDetailsOfArticles] = useState<DetailsOfArticleI | {}>({})
    const [isListLoading, setIsListLoading] = useState<boolean>(true)
    const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(true)
    const [listError, setListError] = useState<boolean>(false)
    const [detailsError, setDetailsError] = useState<boolean>(false)
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [open, setOpen] = useState(false);
    

  
    /**
     * handles list of articles through api
     */
    const getListOfArticles = async () => {
        try {
            const response: any = await getArticlesList()
            setIsListLoading(false)
            setListOfArticles(response?.data)
        }catch(err){
            console.log('error in list of articles', err)
            setIsListLoading(false)
            setListError(true)
        }
    }

    /**
     * handles details of article
     * @param id pass id to get one article details
     */
    const getDetailsOfArticles = async (id: any) => {
        try {
            const response: any = await getArticlesDetails(id)
            setIsDetailsLoading(false)
            setDetailsOfArticles(response?.data)

        } catch (error) {
            console.log('error in details of articles',error)
            setIsDetailsLoading(false)
            setDetailsError(true)
        }
    }

    /**
     * handles search dropdown options
     */
    const getPanelValue = (searchText: string) =>
    !searchText ? [] 
    : listOfArticles?.filter((item: ListOfArticlesI) => 
            item.title.toLowerCase()
            .includes(searchText.toLowerCase()))
            .slice(0,3)
            .map((d: any) => ({value: d?.title}));


    const onSelect = (data: string) => {
         console.log('onSelect', data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    /**
     * handles search of articcles
     */
    const handleSearch = () => {
        const listAfterSearch = listOfArticles?.filter((item: any) => item.title.toLowerCase().includes(value.toLowerCase()))
        setListOfArticles(listAfterSearch)
    }


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
     getListOfArticles()
    }, [])

    return{
        listOfArticles,
        detailsOfArticles,
        value,
        options,
        onChange ,
        onSelect,
        getPanelValue,
        setOptions,

        handleSearch,
        isListLoading,
        isDetailsLoading,
        listError,
        detailsError,

        showDrawer,
        onClose,
        open,

        getDetailsOfArticles
    }
}

export const ProvideArticlesData = ({children}: ProvideArticlesDataI) => {
    const articleData = HandleArticlesData();
    return(
        <articleContext.Provider value={articleData}>{children}</articleContext.Provider>
    )
}