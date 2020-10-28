import fs from 'fs';

export class TangShi {
    constructor() {
        let allTang = null;
        let length = 0;
    }

    loadAllPoet =  () => {
        return new Promise((resolve, reject) => {
            console.log(this);
            this.getAllTang().then(e => {
                this.allTang  = e;
                this.length = e.length;
                resolve();
            });
        });
    }


    getTang =  (ctx) => {
        let random = Math.floor(Math.random() * (this.length - 1));
        ctx.type = 'json';
        ctx.body = this.allTang[random];
    }

    getAllTang = () => {
        return new Promise((resolve, reject) => {
            let allTang = [];
            fs.readdir('./dataset/tang', (err, files) => {
                files.forEach((file, index) => {
                    let filePath = `./dataset/tang/${file}`;
                    let item = fs.readFileSync(filePath, 'utf-8', (err)=>{if(err) {console.error(err);}});
                    try {
                        let it = item.toString().trim();
                        let i = it && JSON.parse(it);
                        i && i.forEach(e => {
                            allTang.push(e);
                        });
                    } catch(err) {
                        console.error(err);
                    } 
                });
                resolve(allTang);
            });
        })
    }   
}

