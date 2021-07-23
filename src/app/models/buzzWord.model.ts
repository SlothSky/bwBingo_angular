class BuzzWord {
    _id:string;
    name: string;
    description: string;
    mdb_id: number;

    constructor(p_name: string, p_description: string, p_mdb: number,)
    {
        //TODO include data type check
        this.name = p_name
        this.description = p_description
        this.mdb_id = p_mdb
    }
}

export default BuzzWord;