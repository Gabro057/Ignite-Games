// Media resize

export const smallImage = (imagePath="", size) => {  
  if(!imagePath || imagePath.length === 0) return ""
  return imagePath.match(/media\/screenshots/) ? imagePath.replace("/media/screenshots", `/media/resize/${size}/-/screenshots`) : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`)  
}