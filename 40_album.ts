function make_album(artist:string, tital: string, tracks?:number){
    const album:{artist:string, tital: string, tracks?:number} ={
        
        artist: artist,
        tital : tital,
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
return(album)
}
const artist1 = make_album('Artist No: 1', 'Tital No: 1');
console.log(artist1);

const artist2 = make_album('Artist No: 2', 'Tital No: 2');
console.log(artist2);

const artist3 = make_album('Artist No: 3', 'Tital No: 3',12);
console.log(artist3);