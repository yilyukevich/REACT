type TMaterialSymbol = 'emoji_objects' | 'keyboard_alt' | 'flash_on';

interface IMaterialSymbol {
    value: TMaterialSymbol;
}

export default function MaterialSymbol(props: IMaterialSymbol)    {
    
    return <span className="material-symbols-outlined">{props.value}</span>
}