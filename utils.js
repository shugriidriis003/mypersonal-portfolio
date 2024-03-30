export const getImageUrl=(Path)=>{
    return new URL(`/assets/${Path}`, import.meta.url).href;
}