export default function InputComponent(){
    return(
        <div className="justify-items-start w-full">
        <textarea 
            cols={30}
            placeholder="Digite aqui..."
            className="w-full border border-gray-300 p-2 rounded-md min-h-[128px]"
        />
    </div>
    )
}