
const KEYS = new Map(
    [
         //white keys
        ['z','C'],['x','G'],['c','E'],['v','F'],['b','B'],['n','D'],['m','A'],
        //black keys
        ['s','Gb'],['d','Eb'],['f','Bb'],['g','Db'],['h','Ab'],

    ]
);
        // console.log(KEYS.size);
        const NOTES = new Map(
            [
             ['C', 'notes/C.mp3'],['Gb', 'notes/Gb.mp3'],['G', 'notes/G.mp3'],['Eb', 'notes/Eb.mp3'],
             ['E', 'notes/E.mp3'] ,['F', 'notes/F.mp3'],['Bb', 'notes/Bb.mp3'],['DB', 'notes/DB.mp3'],
             ['D', 'notes/D.mp3'],['Ab', 'notes/Ab.mp3'],['A', 'notes/A.mp3'],
            ]
        );
        // get all div
        const keyElements = document.querySelectorAll('.key');
        //  console.log(keyElements)
        keyElements.forEach(key => {
            key.addEventListener('click', () => {
                const divElement = key.dataset.note;
                onPlaySound(divElement);
            });
        });

        document.addEventListener('keydown',e =>{
            // console.log(KEYS.get.key);
            if(!e.repeat){
               
                const noteId = KEYS.get(e.key);
                if(noteId != null){
                    onPlaySound(noteId); 
               } 

            }
           

        })
        //play sound

        function onPlaySound(key) {
            console.log(key)
            // const divElement = document.querySelector("#" + key.dataset.note); 
            const audio = NOTES.get(key);
            var sound = new Audio(audio);
            sound.play();
        }