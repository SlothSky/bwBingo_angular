class Question {
    _id:string;
    category: string;
    level: number;
    question: string;
    possibilites: number;
    pos0: string;
    pos1: string;
    pos2: string;
    pos3: string;

    constructor()
    {
        this.category = ""
        this.level = 0
        this.question = ""
        this.possibilites = 0
        this.pos0 = ""
        this.pos1 = ""
        this.pos2 = ""
        this.pos3 = ""
    }
}



export default Question;